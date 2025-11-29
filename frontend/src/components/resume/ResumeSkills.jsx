import React from "react";

export default function ResumeSkills({ skills = {} }) {
  return (
    <section className="skills">
      <h2>SKILLS</h2>

      {Object.keys(skills).map((category) => (
        <p key={category}>
          <strong>{category.charAt(0).toUpperCase() + category.slice(1)}:</strong>{" "}
          {skills[category].join(", ")}
        </p>
      ))}
    </section>
  );
}

