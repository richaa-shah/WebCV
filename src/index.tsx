import * as React from "react";
import { render } from "react-dom";
import { Header } from "./Header/Header";
import { Profile } from "./Profile/Profile";
import { Education } from "./Education/Education";
import { Experience } from "./Experience/Experience";
import { HobActivities } from "./HobActivities/HobActivities";
import "./styles.css";

const educationPlaces = ["Highschool", "College", "University"];
const experiencePlaces = ["Santander", "GSK"];
const HobbiesActivities = ["World Challenge", "Hackathons", "Baking"];
const App: React.FC = () => {
  const [checkedEdu, setCheckedEdu] = React.useState(true);
  const [checkedExp, setCheckedExp] = React.useState(true);
  const [checkedHA, setCheckedHA] = React.useState(true);
  return (
    <div>
      <Header />
      <Profile />
      <input
        type="checkbox"
        value="Show Education"
        checked={checkedEdu}
        onChange={() => setCheckedEdu(!checkedEdu)}
      />
      {checkedEdu ? (
        <Education places={educationPlaces} />
      ) : (
        <h3>Show Education</h3>
      )}
      <br />
      <input
        type="checkbox"
        value="Show Experience"
        checked={checkedExp}
        onChange={() => setCheckedExp(!checkedExp)}
      />
      {checkedExp ? (
        <Experience exPlaces={experiencePlaces} />
      ) : (
        <h3>Show Experience</h3>
      )}
      <br />
      <input
        type="checkbox"
        value="Show Hobbies and Activities"
        checked={checkedHA}
        onChange={() => setCheckedHA(!checkedHA)}
      />
      {checkedHA ? (
        <HobActivities hobActTypes={HobbiesActivities} />
      ) : (
        <h3>Show Hobbies and Activities</h3>
      )}
      <br />
    </div>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
