import * as React from "react";
import { render } from "react-dom";
import { Header } from "./Header/Header";
import { Profile } from "./Profile/Profile";
import { Education } from "./Education/Education";
import { Experience } from "./Experience/Experience";
import { HobActivities } from "./HobActivities/HobActivities";
import Switch from '@material-ui/core/Switch';
import "./styles.css";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const educationPlaces = ["Highschool", "College", "University"];
const experiencePlaces = ["Santander", "GSK"];
const HobbiesActivities = ["World Challenge", "Hackathons", "Baking"];

export default function SwitchesSize() {
  const [checked, setChecked] = React.useState(false);
  const [checkedEdu, setCheckedEdu] = React.useState(true);
  const [checkedExp, setCheckedExp] = React.useState(true);

  const toggleCheckedEdu = () => {
    //setChecked(prev => !prev);
    setCheckedEdu(!checkedEdu)
  };
  const toggleCheckedExp = () => {
   // setChecked(prev => !prev);
    setCheckedExp(!checkedExp)
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch size="small" checked={checkedEdu} onChange={toggleCheckedEdu} />}
        label="Show Education"
      />
      {checkedEdu && (
        <Education places={educationPlaces} />
      )
      }
      <FormControlLabel
        control={<Switch size="small" checked={checkedExp} onChange={toggleCheckedExp} />}
        label="Show Experience"
      />
      {checkedExp && (
        <Experience exPlaces={experiencePlaces} />
      ) }
    </FormGroup>

  );
}
const App: React.FC = () => {


  const [checkedHA, setCheckedHA] = React.useState(true);
  return (
    <div>
      <Header />
      <Profile />
      <SwitchesSize />
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
