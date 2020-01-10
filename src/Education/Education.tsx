import * as React from "react";
import "./Education.css";

interface EducationProps {
  places: string[];
}

export const Education: React.FC<EducationProps> = props => {
  return (
    <div className="Education">
      <h3>Education</h3>
      <div>
        <p>
          <div className="formatLine">
            <div> University of Manchester - 
            BSc (Hons) Computer Science w/ Industrial Placement</div>
            <div> 2015 - 2019</div>
          </div>
          GPA Acheived: First Class - 75.2%
          <br />
          Modules included:
        <ul>
          {props.places.map((place: string) => (
            <li>{place}</li>
          ))}
        </ul>
        </p>
        <p>
          <div className="formatLine">
            <div> Denbigh School</div>
            <div> 2008 - 2015</div>
          </div>
          A Levels: Maths(A), Chemistry(A), Computer Studies(B), Physics AS(B)
          <br />
        </p>
      </div>
    </div>
  );
};
