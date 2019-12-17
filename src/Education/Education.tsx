import * as React from "react";
import "./Education.css";

interface EducationProps {
  places: string[];
}

export const Education: React.FC<EducationProps> = props => {
  return (
    <div className="Education">
      <h3>Education</h3>
      <ul>
        {props.places.map((place: string) => (
          <li>{place}</li>
        ))}
      </ul>
    </div>
  );
};
