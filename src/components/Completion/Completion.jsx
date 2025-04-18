import React from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Completion.css";

const Completion = ({ googleToken }) => {
  const location = useLocation();
  const { stats } = location.state || {
    stats: {
      totalShots: 0,
      completedSets: 0,
      averageTimePerShot: 0,
      difficulty: 1,
      totalDuration: 0,
    },
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      <Navbar googleToken={googleToken} />
      <div className="completion-container">
        <div className="completion-header">
          <h1>🎉 Fantastic Work! 🎉</h1>
          <p className="motivation-text">
            You've completed an amazing shadow practice session!
          </p>
        </div>

        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <h3>Total Shots</h3>
            <p>{stats.totalShots}</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🔄</div>
            <h3>Sets Completed</h3>
            <p>{stats.completedSets}</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">⚡</div>
            <h3>Difficulty Level</h3>
            <p>{stats.difficulty}</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">⏱️</div>
            <h3>Average Time/Shot</h3>
            <p>{stats.averageTimePerShot.toFixed(2)}s</p>
          </div>

          <div className="stat-card wide">
            <div className="stat-icon">⌛</div>
            <h3>Total Duration</h3>
            <p>{formatTime(stats.totalDuration)}</p>
          </div>
        </div>

        <div className="action-buttons">
          <Link to="/practice" className="button primary">
            Start New Practice
          </Link>
          <Link to="/" className="button secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Completion;
