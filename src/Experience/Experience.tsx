import * as React from "react";
import "./Experience.css";

interface ExperienceProps {
  exPlaces: string[];
}

export const Experience: React.FC<ExperienceProps> = props => {
  return (
    <div className="ExperienceStyle">
      <h3>Previous Employment</h3>
      <div>
        <p>
          <div className="formatLine">
            <div> Network Rail - IT and Business Graduate Scheme</div>
            <div> Sept 2019 - Present</div>
          </div>
          WHAT DID I DO???
          <br />
        </p>
        <p>
          <div className="formatLine">
            <div> PRWD - Data Analyst Summer Placement</div>
            <div> July 2018 - Aug 2018 </div>
          </div>
          WHAT DID I DO???
          <br />
        </p>
        <p>
          <div className="formatLine">
            <div> Avecto - QA Engineer Industrial Placement</div>
            <div> July 2017 - July 2018</div>
          </div>
          WHAT DID I DO???
          <br />
        </p>
        <p>
          <div className="formatLine">
            <div> Santander - Data Innovation Summer Placement</div>
            <div> July 2016 - Sept 2016</div>
          </div>
          WHAT DID I DO???
          <br />
        </p>
      </div>
    </div>
  );
};
