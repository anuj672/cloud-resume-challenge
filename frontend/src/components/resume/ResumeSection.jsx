import React from "react";

export default function ResumeSection({ title, items, renderItem }) {
  return (
    <section className={title.toLowerCase()}>
      <h2>{title.toUpperCase()}</h2>
      {items.map((item, idx) => (
        <div className="item" key={idx}>
          {renderItem(item)}
        </div>
      ))}
    </section>
  );
}
