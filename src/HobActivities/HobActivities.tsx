import * as React from "react";
import "./HobActivities.css";

interface HobbyActivityProps {
  hobActTypes: string[];
}

export const HobActivities: React.FC<HobbyActivityProps> = props => {
  return (
    <div className="HobActStyle">
      <section>
        <h3>Hobbies and Acvtivities</h3>
      </section>
      <article>
        <ul>
          {props.hobActTypes.map((hobActType: string) => (
            <li>{hobActType}</li>
          ))}
        </ul>
      </article>
    </div>
  );
};
