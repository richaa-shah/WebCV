import * as React from "react";
import "./Experience.css";

interface ExperienceProps {
  exPlaces: string[];
}

export const Experience: React.FC<ExperienceProps> = props => {
  return (
    <div className="ExperienceStyle">
      <section>
        <h3>Experience</h3>
      </section>
      <article>
        <ul>
          {props.exPlaces.map((exPlace: string) => (
            <li>{exPlace}</li>
          ))}
        </ul>
      </article>
    </div>
  );
};
