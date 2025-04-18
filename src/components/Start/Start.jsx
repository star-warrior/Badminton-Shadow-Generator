import Navbar from "../Navbar/Navbar";
import "./Start.css";
import halfCourt from "../../assets/images/Half_Court.png";
import arrow from "../../assets/images/arrow.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Start = ({ corners, parameterValues, googleToken }) => {
  const navigate = useNavigate();
  // State for loading and practice
  const [isLoading, setIsLoading] = useState(true);
  const [countdown, setCountdown] = useState(5);
  const [count, setCount] = useState(0);
  const [rotation, setRotation] = useState(0);

  // New states for sets and cooldown
  const [currentSet, setCurrentSet] = useState(1);
  const [isCooldown, setIsCooldown] = useState(false);
  const [cooldownTimer, setCooldownTimer] = useState(parameterValues.cooldown);

  // Add stats tracking
  const [sessionStats, setSessionStats] = useState({
    totalShots: 0,
    completedSets: 0,
    averageTimePerShot: 0,
    startTime: Date.now(),
  });

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

  // Initial countdown timer effect
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, [countdown]);

  // Cooldown timer effect
  useEffect(() => {
    if (isCooldown && cooldownTimer > 0) {
      const timer = setTimeout(() => {
        setCooldownTimer((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (isCooldown && cooldownTimer === 0) {
      // Reset for next set
      setIsCooldown(false);
      setCount(0);
      setCooldownTimer(parameterValues.cooldown);
      setCurrentSet((prev) => prev + 1);
    }
  }, [cooldownTimer, isCooldown, parameterValues.cooldown]);

  // Modified practice effect to track stats
  useEffect(() => {
    if (isLoading || isCooldown) return;

    if (count >= parameterValues.shots) {
      if (currentSet < parameterValues.sets) {
        setIsCooldown(true);
        setSessionStats((prev) => ({
          ...prev,
          totalShots: prev.totalShots + parameterValues.shots,
          completedSets: prev.completedSets + 1,
        }));
      } else {
        // Calculate final stats
        const endTime = Date.now();
        const totalDuration = (endTime - sessionStats.startTime) / 1000; // in seconds
        const totalShots = parameterValues.shots * parameterValues.sets;
        const averageTimePerShot = totalDuration / totalShots;

        // Navigate to completion page with stats
        navigate("/completion", {
          state: {
            stats: {
              ...sessionStats,
              totalShots,
              completedSets: parameterValues.sets,
              averageTimePerShot,
              difficulty: parameterValues.difficulty,
              totalDuration,
            },
          },
        });
      }
      return;
    }

    const timer = setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
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
    }, gapTime);

    return () => clearTimeout(timer);
  }, [
    count,
    parameterValues.shots,
    isLoading,
    isCooldown,
    currentSet,
    parameterValues.sets,
    corners,
    gapTime,
    navigate,
    sessionStats,
  ]);

  // Loading screen render
  if (isLoading) {
    return (
      <div>
        <Navbar googleToken={googleToken}></Navbar>
        <div className="loading-screen">
          <h2>Get Ready!</h2>
          <div className="countdown">{countdown}</div>
          <p>Starting in {countdown} seconds...</p>
        </div>
      </div>
    );
  }

  // Cooldown screen render
  if (isCooldown) {
    return (
      <div>
        <Navbar googleToken={googleToken}></Navbar>
        <div className="loading-screen cooldown">
          <h2>Set {currentSet} Complete!</h2>
          <div className="countdown">{cooldownTimer}</div>
          <p>Next set starting in {cooldownTimer} seconds...</p>
          <div className="set-info">
            <p>
              Sets completed: {currentSet} / {parameterValues.sets}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Practice complete screen
  if (currentSet > parameterValues.sets) {
    return (
      <div>
        <Navbar googleToken={googleToken}></Navbar>
        <div className="loading-screen complete">
          <h2>Practice Complete! 🎉</h2>
          <div className="practice-summary">
            <p>Total sets completed: {parameterValues.sets}</p>
            <p>Shots per set: {parameterValues.shots}</p>
            <p>Difficulty level: {parameterValues.difficulty}</p>
          </div>
        </div>
      </div>
    );
  }

  // Main practice screen render
  return (
    <div>
      <Navbar googleToken={googleToken}></Navbar>
      <div className="start-practice">
        <h1>Set: {currentSet}</h1>
        <div className="court">
          <img src={halfCourt} alt="" />
          <img
            className="arrow"
            src={arrow}
            style={{
              transform: `translate(-50%,-70%) rotate(${rotation}deg)`,
              transition: "transform 0.3s ease-in-out",
            }}
            alt=""
          />
        </div>
        <div className="stats">
          <div className="param">
            <span className="param-title">Shots</span>
            <h3 className="param-value">{count}</h3>
          </div>
          <div className="param">
            <span className="param-title">Set</span>
            <h3 className="param-value">
              {currentSet}/{parameterValues.sets}
            </h3>
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
