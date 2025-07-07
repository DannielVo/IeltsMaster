import React from "react";
import "./featuresReview.css";
import { FEATURES } from "../../../../assets/asset";

const FeaturesReview = () => {
  const leftFeatures = FEATURES.slice(0, 3);
  const rightFeatures = FEATURES.slice(3, 6);

  return (
    <div className="features-review">
      <h2>What Awaits You at IELTS Master?</h2>

      <div className="feature-review-content">
        <div className="feature-left">
          {leftFeatures.map((item, index) => (
            <div className="feature-item" key={`leftFeatures ${index}`}>
              <i className={`bxr ${item.icon} feature-icon`}></i>
              <div className="feature-content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
          {/* <div className="feature-item">
            <i className="bxr bx-trophy-star feature-icon"></i>
            <div className="feature-content">
              <h3>Practice Smarter with Flashcards</h3>
              <p>
                Use our built-in flashcards — or create your own — to memorize
                vocabulary, grammar rules, or even speaking answers. Your
                personal learning toolkit, always within reach.
              </p>
            </div>
          </div>

          <div className="feature-item">
            <i className="bxr bx-price-tag feature-icon"></i>
            <div className="feature-content">
              <h3>Practice Smarter with Flashcards</h3>
              <p>
                Use our built-in flashcards — or create your own — to memorize
                vocabulary, grammar rules, or even speaking answers. Your
                personal learning toolkit, always within reach.
              </p>
            </div>
          </div>

          <div className="feature-item">
            <i className="bxr bx-book-open feature-icon"></i>
            <div className="feature-content">
              <h3>Practice Smarter with Flashcards</h3>
              <p>
                Use our built-in flashcards — or create your own — to memorize
                vocabulary, grammar rules, or even speaking answers. Your
                personal learning toolkit, always within reach.
              </p>
            </div>
          </div> */}
        </div>

        <div className="feature right">
          {rightFeatures.map((item, index) => (
            <div className="feature-item" key={`rightFeatures ${index}`}>
              <i className={`bxr ${item.icon} feature-icon`}></i>
              <div className="feature-content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
          {/* <div className="feature-item">
            <i className="bxr bx-refresh-cw-alt feature-icon"></i>
            <div className="feature-content">
              <h3>Practice Smarter with Flashcards</h3>
              <p>
                Use our built-in flashcards — or create your own — to memorize
                vocabulary, grammar rules, or even speaking answers. Your
                personal learning toolkit, always within reach.
              </p>
            </div>
          </div>

          <div className="feature-item">
            <i className="bxr bx-fire-alt feature-icon"></i>
            <div className="feature-content">
              <h3>Practice Smarter with Flashcards</h3>
              <p>
                Use our built-in flashcards — or create your own — to memorize
                vocabulary, grammar rules, or even speaking answers. Your
                personal learning toolkit, always within reach.
              </p>
            </div>
          </div>

          <div className="feature-item">
            <i className="bxr bx-community feature-icon"></i>
            <div className="feature-content">
              <h3>Practice Smarter with Flashcards</h3>
              <p>
                Use our built-in flashcards — or create your own — to memorize
                vocabulary, grammar rules, or even speaking answers. Your
                personal learning toolkit, always within reach.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default FeaturesReview;
