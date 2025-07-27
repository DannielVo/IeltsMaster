import React from "react";
import "./featuresReview.css";
import { FEATURES } from "../../../../assets/asset";

const FeaturesReview = () => {
  const leftFeatures = FEATURES.slice(0, 3);
  const rightFeatures = FEATURES.slice(3, 6);

  return (
    <div className="features-review">
      <h2>What awaits you at IELTS Master?</h2>

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
        </div>

        <div className="feature-right">
          {rightFeatures.map((item, index) => (
            <div className="feature-item" key={`rightFeatures ${index}`}>
              <i className={`bxr ${item.icon} feature-icon`}></i>
              <div className="feature-content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesReview;
