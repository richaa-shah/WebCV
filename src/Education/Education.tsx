import * as React from "react";
import "./Education.css";

interface EducationProps {
  places: string[];
}

export const Education: React.FC<EducationProps> = props => {
  return (
    <div className="Education">
      <section>
        <h3>Education</h3>
      </section>
      <article>
        <ul>
          {props.places.map((place: string) => (
            <li>{place}</li>
          ))}
        </ul>
      </article>
    </div>
  );
};
