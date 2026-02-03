import React, { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib.js";
import "./HeroSection.css";

const HeroSection = ({ onDownloadClick }) => {
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
      if (!canvas) return;

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        50,
        canvas.clientWidth / canvas.clientHeight,
        0.5,
        1000
      );
      camera.position.set(2.1025, 4, 7.35);

      if (window.innerWidth < 560) {
        camera.position.set(2.1025, 1, 4.5);
      }

      renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true,
      });
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);

      window.addEventListener("resize", onWindowResize);

      if (deviceType === "touch" && renderer.domElement) {
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

      new RGBELoader().load(
        "/assets/3dmodels/odyssey_0_5K_6e3c37df-221e-49b9-8447-39a50559d19e.hdr",
        function (texture) {
          texture.mapping = THREE.EquirectangularReflectionMapping;
          scene.environment = texture;
        }
      );

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
        undefined,
        (error) => {
          console.error("Error loading GLB:", error);
        }
      );

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
      if (!canvasRef.current || !renderer || !camera) return;

      camera.aspect =
        canvasRef.current.clientWidth / canvasRef.current.clientHeight;
      renderer.setSize(
        canvasRef.current.clientWidth,
        canvasRef.current.clientHeight
      );

      camera.updateProjectionMatrix();
    }

    function onMouseMove(e) {
      if (!canvas) return;
      mouseIn = true;

      var offsets = canvas.getBoundingClientRect();
      mousePosition.x = ((e.clientX - offsets.left) / canvas.clientWidth) * 2 - 1;
      mousePosition.y = -((e.clientY - offsets.top) / canvas.clientHeight) * 2 + 1;

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
      if (parent && camera) parent.lookAt(camera.position);
    }

    var clock = new THREE.Clock();
    function animate() {
      if (!canvasRef.current || !renderer) return;

      if (deviceType === "non-touch" && parent != null && mouseIn)
        parent.lookAt(target.position);
      if (deviceType === "touch" && controls) {
        controls.update(clock.getDelta());
      }
      renderer.render(scene, camera);

      // Removed onWindowResize from animate to prevent excessive calls and potential issues
    }

    init();

    return () => {
      window.removeEventListener("resize", onWindowResize);
      if (deviceType === "non-touch" && canvas) {
        canvas.removeEventListener("mousemove", onMouseMove);
        canvas.removeEventListener("mouseleave", onMouseLeave);
      }
      if (renderer) {
        renderer.setAnimationLoop(null);
        renderer.dispose();
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
            <div className="hero-coming-soon">
              Coming Soon to Play Store & App Store
            </div>
            <p className="hero-launch-date">Launching February 5, 2026</p>
          </div>
        </div>

        <canvas
          id="hero-canvas"
          className="hero-canvas"
          ref={canvasRef}
        ></canvas>

        {isLoading && (
          <div className="canvas-loader">
            <div className="spinner"></div>
            <p>Loading 3D model...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
