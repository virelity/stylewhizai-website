import React, { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib.js";
import "./HeroSection.css";

const HeroSection = ({onDownloadClick}) => {
  const canvasRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let camera, scene, renderer, controls;
    const canvas = canvasRef.current;
    const gltfloader = new GLTFLoader();
    let deviceType;
    let maniquine;
    let parent;
    let mouseIn;
    let phone = null;
    const target = new THREE.Object3D();
    const intersectionPoint = new THREE.Vector3();
    const plane = new THREE.Plane();
    const mousePosition = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();

    if (window.matchMedia("(any-hover: none)").matches) {
      deviceType = "touch";
    } else {
      deviceType = "non-touch";
    }

    function init() {
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        0.5,
        1000
      );
      camera.position.set(2.1025, 4, 7.35); //(2.1025, 4, 6.35);

      if (window.innerWidth < 560) {
        camera.position.set(2.1025, 1, 4.5); //(2.1025, 4, 6.35);
      }

      renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true,
      });
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);

      window.addEventListener("resize", onWindowResize);

      if (deviceType === "touch") {
        controls = new OrbitControls(camera, renderer.domElement);
        controls.target = new THREE.Vector3(2.103, 4.887, 0.396);
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.maxAzimuthAngle = (30 * Math.PI) / 180;
        controls.minAzimuthAngle = (-30 * Math.PI) / 180;
        controls.maxPolarAngle = (110 * Math.PI) / 180;
        controls.minPolarAngle = (70 * Math.PI) / 180;
        controls.enableDamping = true;
        controls.dampingFactor = 0.1;
        controls.update();
      }

      RectAreaLightUniformsLib.init();

      // Load HDR environment map
      new RGBELoader().load(
        "/assets/3dmodels/odyssey_0_5K_6e3c37df-221e-49b9-8447-39a50559d19e.hdr",
        function (texture) {
          texture.mapping = THREE.EquirectangularReflectionMapping;
          scene.environment = texture;
        }
      );

      // ✅ Load 3D model with loading manager
      const manager = new THREE.LoadingManager();
      manager.onStart = () => setIsLoading(true);
      manager.onLoad = () => setIsLoading(false);
      manager.onError = () => setIsLoading(false);

      const managedLoader = new GLTFLoader(manager);
      managedLoader.load(
        "/assets/3dmodels/robot_hand_update_2.glb",
        (gltf) => {
          scene.add(gltf.scene);
          parent = gltf.scene.getObjectByName("Empty001");
          maniquine = gltf.scene.getObjectByName("body002");
          phone = gltf.scene.getObjectByName("MobilePhone");
        },
        (xhr) => {
          // optional: progress percentage
          // console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        (error) => {
          console.error("Error loading GLB:", error);
        }
      );

      // Lighting
      const rectLight1 = new THREE.RectAreaLight(0xfcba03, 3, 20, 20);
      rectLight1.position.set(-5.257, 10.799, -5.653);
      rectLight1.rotation.set(0, Math.PI, 0);
      scene.add(rectLight1);

      plane.setFromNormalAndCoplanarPoint(
        new THREE.Vector3(0, 0, 1),
        new THREE.Vector3(0, 0, 5)
      );

      if (deviceType === "non-touch") {
        canvas.addEventListener("mousemove", onMouseMove);
        canvas.addEventListener("mouseleave", onMouseLeave);
      }

      renderer.setAnimationLoop(animate);
    }

    function onWindowResize() {
      // canvas.width =
      //   window.innerWidth < 650
      //     ? window.innerWidth * 1
      //     : window.innerWidth < 992
      //     ? window.innerWidth * 0.5
      //     : window.innerWidth < 1350
      //     ? window.innerWidth * 0.4
      //     : window.innerWidth < 1450
      //     ? window.innerWidth * 0.36
      //     : window.innerWidth * 0.33;
      // canvas.height = window.innerHeight / 1.25;

      camera.aspect =
        canvasRef.current.clientWidth / canvasRef.current.clientHeight;
      renderer.setSize(
        canvasRef.current.clientWidth,
        canvasRef.current.clientHeight
      );

      // console.log(camera.aspect);
      // console.log(canvasRef.current.clientWidth);
      // console.log(canvasRef.current.clientHeight);

      camera.updateProjectionMatrix();
    }

    function onMouseMove(e) {
      mouseIn = true;

      var offsets = canvas.getBoundingClientRect();
      mousePosition.x = ((e.clientX - offsets.left) / canvas.width) * 2 - 1;
      mousePosition.y = -((e.clientY - offsets.top) / canvas.height) * 2 + 1;

      raycaster.setFromCamera(mousePosition, camera);
      raycaster.ray.intersectPlane(plane, intersectionPoint);
      target.position.set(
        intersectionPoint.x,
        intersectionPoint.y,
        intersectionPoint.z
      );
    }

    function onMouseLeave() {
      mouseIn = false;
      if (parent) parent.lookAt(camera.position);
    }

    var clock = new THREE.Clock();
    function animate() {
      if (deviceType === "non-touch" && parent != null && mouseIn)
        parent.lookAt(target.position);
      if (deviceType === "touch") {
        controls.update(clock.getDelta());
      }
      renderer.render(scene, camera);
      onWindowResize();
    }

    init();

    return () => {
      window.removeEventListener("resize", onWindowResize);
      if (deviceType === "non-touch") {
        canvas.removeEventListener("mousemove", onMouseMove);
        canvas.removeEventListener("mouseleave", onMouseLeave);
      }
    };
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Your Personal Stylist,{" "}
            <span className="gradient-text">Reinvented.</span>
          </h1>
          <p className="hero-subtitle">
            StyleWhiz brings the power of AI and AR to your wardrobe. Get
            personalized outfit suggestions, try looks virtually, and shop your
            style — all in one seamless app experience.
          </p>
          <div className="hero-buttons">
            <Button className="primary-hero-btn" onClick={onDownloadClick}>
              Explore the App <ArrowRight size={20} />
            </Button>
            <Button variant="outline" className="secondary-hero-btn">
              Start Styling Now
            </Button>
          </div>
        </div>

        {/* <div className="hero-image"> */}
        <>
          <canvas
            id="hero-canvas"
            className="hero-canvas"
            ref={canvasRef}
          ></canvas>

          {/* ✅ Loader overlay */}
          {isLoading && (
            <div className="canvas-loader">
              <div className="spinner"></div>
              <p>Loading 3D model...</p>
            </div>
          )}
        </>
        {/* </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
