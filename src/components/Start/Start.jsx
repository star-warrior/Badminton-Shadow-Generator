import Navbar from "../Navbar/Navbar";
import "./Start.css";
import halfCourt from "../../assets/images/Half_Court.png";
import arrow from "../../assets/images/arrow.png";
import { useState, useEffect } from "react";

const Start = ({ corners, parameterValues }) => {
  // In your component:
  const [count, setCount] = useState(0);
  const [rotation, setRotation] = useState(0);

  let gapTime;
  console.log(corners);

  switch (parameterValues.difficulty) {
    case 1:
      gapTime = 3500;
      break;
    case 2:
      gapTime = 3000;
      break;
    case 3:
      gapTime = 2500;
      break;
    case 4:
      gapTime = 2000;
      break;
    case 5:
      gapTime = 1500;
      break;
    default:
      break;
  }

  useEffect(() => {
    // Don't continue if we've reached the total shots
    if (count >= parameterValues.shots) return;

    // Set a timeout to increment the count
    const timer = setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
      console.log(count + 1);

      const random = Math.floor(Math.random() * corners.length);

      switch (corners[random]) {
        case "frontLeft":
          setRotation(-135);
          break;
        case "frontRight":
          setRotation(-45);
          break;
        case "midRight":
          setRotation(0);
          break;
        case "midLeft":
          setRotation(180);
          break;
        case "backLeft":
          setRotation(135);
          break;
        case "backRight":
          setRotation(45);
          break;

        default:
          break;
      }

      console.log(corners[random], rotation);
    }, gapTime);

    return () => clearTimeout(timer);
  }, [count, parameterValues.shots]); // Re-run when count changes

  return (
    <div>
      <Navbar />
      <div className="start-practice">
        <h1>Set: 1</h1>
        <div className="court">
          <img src={halfCourt} alt="" />
          <img
            className="arrow"
            src={arrow}
            style={{ transform: `translate(-50%,-70%) rotate(${rotation}deg)` }}
            alt=""
          />
        </div>
        <div className="stats">
          <div className="param">
            <span className="param-title">Shots</span>
            <h3 className="param-value">{count}</h3>
          </div>
          <div className="param">
            <span className="param-title">Difficulty</span>
            <h3 className="param-value">{parameterValues.difficulty}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
