import React from "react";

export default function ResumeCertifications({ certifications }) {
  return (
    <section className="certifications">
      <h2>CERTIFICATIONS</h2>
      <ul>
        {certifications.map((cert, idx) => (
          <li key={idx}>
            <a href={cert.url} target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>
              {cert.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
