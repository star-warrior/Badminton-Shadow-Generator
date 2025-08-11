import React from "react";
import CircularSlider from "../../components/CircularSlider/CircularSlider";
import Navbar from "../../components/Navbar/Navbar";
import "./Practice.css";
import next from "../../assets/images/next.png";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

function Parameter({ title = "", min, max, value, onChange }) {
  return (
    <div className="param slider-unit">
      <span className="param-title">{title}</span>
      <CircularSlider
        title={title}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

const Practice = ({ parameterValues, onParameterChange, googleToken }) => {
  const navigate = useNavigate();
  function navigateBack() {
    navigate(-1);
  }
  return (
    <>
      <div className="body">
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

        <div className=" navigator">
          <Link
            className="back"
            onClick={() => {
              navigateBack();
            }}
          >
            <img src={next} alt="" /> Back{" "}
          </Link>
          <Link to="/practice/corner" className="next">
            Next <img src={next} alt="" srcset="" />
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Practice;
