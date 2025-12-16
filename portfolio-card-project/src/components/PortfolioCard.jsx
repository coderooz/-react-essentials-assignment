import { useState } from "react";
import ActionBar from "./ActionBar";
import SkillChip from "./SkillChip";
import data from "../data/profileData.js";


export default function PortfolioCard() {
  const [likes, setLikes] = useState(42);
  const [darkMode, setDarkMode] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const images = data.images;
  const skills = data.skills;

  const cycleImage = () => {
    setImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className={`card ${darkMode ? "dark" : ""}`}>
      <img
        src={images[imageIndex]}
        alt="Profile Avatar"
        className="avatar"
      />

      <h2 className="name">TuteDude</h2>
      <p className="title">Frontend Developer & Designer</p>

      <p className="bio">
        I build clean, accessible, and interactive user interfaces
        using modern web technologies.
      </p>

      <div className="skills">
        {skills.map((skill) => (
          <SkillChip
            key={skill}
            label={skill}
            theme={darkMode ? "dark" : "light"}
          />
        ))}
      </div>

      <ActionBar
        likes={likes}
        isDark={darkMode}
        onLike={() => setLikes((l) => l + 1)}
        onThemeToggle={() => setDarkMode((d) => !d)}
        onImageChange={cycleImage}
      />
    </div>
  );
}
