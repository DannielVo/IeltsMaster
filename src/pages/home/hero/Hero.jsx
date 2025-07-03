import React from "react";
import "./hero.css";
import Introduction from "./introduction/Introduction";
import FeaturesReview from "./features-review/FeaturesReview";

const Hero = () => {
  return (
    <section className="hero left-right">
      <Introduction></Introduction>
      <FeaturesReview></FeaturesReview>
    </section>
  );
};

export default Hero;
