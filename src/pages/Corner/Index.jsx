import React from "react";
import halfCourt from "../../assets/images/Half_Court.png";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import "./srtyle.css";
import next from "../../assets/images/next.png";
import { Link, Router, useNavigate } from "react-router-dom";

export default function Corner({ corners, setCorners, googleToken }) {
  function handleCorners(cornerName) {
    setCorners((prev) => {
      // If the corner is already in the array, remove it
      if (prev.includes(cornerName)) {
        return prev.filter((corner) => corner !== cornerName);
      }
      // Otherwise add it to the array
      return [...prev, cornerName];
    });
    console.log(corners);
  }

  const navigate = useNavigate();
  function navigateBack() {
    navigate(-1);
  }

  return (
    <div className="body">
      <Navbar googleToken={googleToken}></Navbar>

      <div className="cornerSelection">
        <h2>Select Corners</h2>
        <form action="" className="cornerSelectionForm">
          <img src={halfCourt} alt="" />
          <input
            type="checkbox"
            className="frontLeft"
            name="frontLeft"
            onChange={(e) => {
              handleCorners(e.target.name);
            }}
            defaultChecked="true"
          />
          <input
            type="checkbox"
            className="frontRight"
            name="frontRight"
            onChange={(e) => {
              handleCorners(e.target.name);
            }}
            defaultChecked="true"
          />
          <input
            type="checkbox"
            className="midLeft"
            name="midLeft"
            onChange={(e) => {
              handleCorners(e.target.name);
            }}
            defaultChecked="true"
          />
          <input
            type="checkbox"
            className="midRight"
            name="midRight"
            onChange={(e) => {
              handleCorners(e.target.name);
            }}
            defaultChecked="true"
          />
          <input
            type="checkbox"
            className="backLeft"
            name="backLeft"
            onChange={(e) => {
              handleCorners(e.target.name);
            }}
            defaultChecked="true"
          />
          <input
            type="checkbox"
            className="backRight"
            name="backRight"
            onChange={(e) => {
              handleCorners(e.target.name);
            }}
            defaultChecked="true"
          />
        </form>
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
        <Link to="/practice/start" className="next">
          Start Practice <img src={next} alt="" srcset="" />
        </Link>
      </div>
    </div>
  );
}
