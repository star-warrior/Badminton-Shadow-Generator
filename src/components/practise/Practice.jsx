import React from "react";
import CircularSlider from "../CircularSlider/CircularSlider";
import Navbar from "../Navbar/Navbar";
import "./Practice.css";
import next from "../../assets/images/next.png";
import { Link } from "react-router-dom";

function Parameter({ title = "", min, max, value, onChange }) {
  return (
    <div className="param slider-unit">
      <span className="param-title">{title}</span>
      <CircularSlider min={min} max={max} value={value} onChange={onChange} />
    </div>
  );
}

const Practice = ({ parameterValues, onParameterChange, googleToken }) => {
  return (
    <div>
      <Navbar googleToken={googleToken} />
      <div className="practice set-routine-page">
        <div className="title">
          <h2>Set Routine</h2>
        </div>
        <div className="parameters grid">
          <Parameter
            title="Shots"
            min={0}
            max={50}
            value={parameterValues.shots}
            onChange={(value) => onParameterChange("shots", value)}
          />
          <Parameter
            title="Sets"
            min={0}
            max={10}
            value={parameterValues.sets}
            onChange={(value) => onParameterChange("sets", value)}
          />
          <Parameter
            title="Difficulty"
            min={0}
            max={5}
            value={parameterValues.difficulty}
            onChange={(value) => onParameterChange("difficulty", value)}
          />
          <Parameter
            title="Cooldown"
            min={0}
            max={100}
            value={parameterValues.cooldown}
            onChange={(value) => onParameterChange("cooldown", value)}
          />
        </div>
      </div>

      <div className="navigator">
        <Link to="/practice/corner" className="next">
          Next <img src={next} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Practice;
