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

const educationPlaces = ["Software Engineering", "Machine Learning", "Java",
                      "Algorithms", "Symbolic AI", "Graphics", "Databases"];

const experiencePlaces = ["Network Rail","PRWD","Avecto","Santander"];

const HobbiesActivities = ["World Challenge", "Hackathons", "Baking"];

export default function SwitchesSize() {
  const [checked, setChecked] = React.useState(false);
  const [checkedEdu, setCheckedEdu] = React.useState(true);
  const [checkedExp, setCheckedExp] = React.useState(true);
  const [checkedHA, setCheckedHA] = React.useState(true);

  const toggleCheckedEdu = () => {
    //setChecked(prev => !prev);
    setCheckedEdu(!checkedEdu)
  };
  const toggleCheckedExp = () => {
   // setChecked(prev => !prev);
    setCheckedExp(!checkedExp)
  };
  const toggleCheckedHA = () => {
   // setChecked(prev => !prev);
    setCheckedHA(!checkedHA)
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
        label="Show Previous Jobs"
      />
      {checkedExp && (
        <Experience exPlaces={experiencePlaces} />
      ) }

      <FormControlLabel
        control={<Switch size="small" checked={checkedHA} onChange={toggleCheckedHA} />}
        label="Show Hobbies and Activities"
      />
      {checkedHA && (
        <HobActivities hobActTypes={HobbiesActivities} />
      ) }
    </FormGroup>

  );
}
const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Profile />
      <SwitchesSize />
      <br />
    </div>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
