import React from "react";
import "./hero.css";
import Introduction from "./introduction/Introduction";
import FeaturesReview from "./features-review/FeaturesReview";
import CounterReview from "./counter-review/CounterReview";

const Hero = () => {
  return (
    <section className="hero left-right">
      <Introduction></Introduction>
      <FeaturesReview></FeaturesReview>
      <CounterReview></CounterReview>
    </section>
  );
};

export default Hero;
