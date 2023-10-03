import React from "react";
import Hero from "./Hero";

const AboutUs = () => {
  const text =
    "Radar, the guardian of modern warfare, stands at the forefront of military operations, offering unmatched precision in detecting and tracking objects. Explore the evolution of radar from wartime secrecy to its critical role in today's defense. Discover how radar empowers military forces with unparalleled situational awareness, aiding swift responses to threats in the air, on land, and at sea. From missile defense to stealth technology, we delve into the strategies, tactics, and innovations that shape military radar operationsWhether you're a defense expert or a curious mind, our articles and analyses provide crucial insights into this pivotal technology. Join us in exploring radar's role in ensuring security and defining victory in military operations.";
  return (
    <div>
      <Hero text={text} />
    </div>
  );
};

export default AboutUs;
