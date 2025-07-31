import React from "react";

const SkillSection = ({ title, items }) => {
  return (
    <div className={`${title} details-element`}>
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillSection;
