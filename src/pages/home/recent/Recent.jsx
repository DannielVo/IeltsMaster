import React from "react";
import "./recent.css";
import RecentMistakes from "./recentMistakes/RecentMistakes";
import RecentStreak from "./recentStreak/RecentStreak";

const Recent = () => {
  return (
    <section className="recent-section left-right">
      <div className="recent-container">
        <RecentMistakes></RecentMistakes>
        <RecentStreak></RecentStreak>
      </div>
    </section>
  );
};

export default Recent;
