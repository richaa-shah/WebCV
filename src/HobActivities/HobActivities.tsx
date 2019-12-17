import * as React from "react";
import "./HobActivities.css";

interface HobbyActivityProps {
  hobActTypes: string[];
}

export const HobActivities: React.FC<HobbyActivityProps> = props => {
  return (
    <div className="HobActStyle">
      <h3>Hobbies and Acvtivities</h3>
      <ul>
        {props.hobActTypes.map((hobActType: string) => (
          <li>{hobActType}</li>
        ))}
      </ul>
    </div>
  );
};
