import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import "./FAQSection.css";

const FAQSection = () => {
  const faqs = [
    {
      question:
        "What is the AR/AI smart service platform for personalized styling?",
      answer:
        "The platform utilizes augmented reality (AR) technologies to suggest personalized styles to users based on their preferences, body type, and fashion trends.",
    },
    {
      question: "How does the virtual try-on technology work?",
      answer:
        "The virtual try-on technology allows users to try on clothing and accessories in a digital environment by superimposing the items onto a user's image or avatar. Users can see how the items look on them without physically wearing them.",
    },
    {
      question: "Is the virtual try-on experience realistic?",
      answer:
        "The virtual try-on experience aims to be as realistic as possible, using advanced AR/AI technology to simulate how the clothing and accessories would look in real life. Lighting, shadows, and fabric textures are considered to enhance realism.",
    },
    {
      question: "Can users customize their avatars for virtual try-on?",
      answer:
        "Users may have the option to customize their avatars based on their body measurements, skin tone, hair color, and other features to better visualize how the clothing and accessories would look on them.",
    },
    {
      question:
        "How accurate are the size and fit recommendations provided by the platform?",
      answer:
        "The platform may use algorithms that consider user-provided measurements, brand sizing charts, and fit preferences to offer accurate size and fit recommendations. However, users are encouraged to refer to size guides provided by individual brands for precise fitting.",
    },
    {
      question: "What brands and products are available for virtual try-on?",
      answer:
        "The platform may collaborate with various fashion brands to offer a wide range of clothing and accessories for virtual try-on. Users can explore and try on items from these partner brands.",
    },
    {
      question: "Is the platform secure in terms of user data and privacy?",
      answer:
        "The platform prioritizes user data security and privacy, implementing encryption protocols, data protection measures, and ensuring compliance with relevant data privacy regulations to safeguard user information.",
    },
    {
      question:
        "Can users share their virtual try-on experiences on social media?",
      answer:
        "Users may have the option to share their virtual try-on experiences on social media platforms to seek opinions from friends or followers, creating an interactive and engaging shopping experience.",
    },
  ];

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Find answers to common questions about our AR/AI styling platform
        </p>

        <Accordion type="single" collapsible className="faq-accordion">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
