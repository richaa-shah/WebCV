import * as React from "react";
import { useState } from "react";
import "./UserInputStyle.css";

export const UserInput: React.FC = () => {
  const [currentName, setCurrentName] = useState("");
  const [namesList, setNamesList] = useState([]);
  return (
    <div>
      <input
        type="text"
        value={currentName}
        onChange={e => setCurrentName(e.target.value)}
      />
      <input
        type="button"
        value="add"
        onClick={() => {
          setNamesList([...namesList, currentName]);
          setCurrentName("");
        }}
      />
      <ul>{namesList && namesList.map(name => <li>{name}</li>)}</ul>
    </div>
  );
};
