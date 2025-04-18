import React, { useState, useRef, useEffect } from "react";
import "./CircularSlider.css";

const CircularSlider = ({
  min = 0,
  max = 100,
  value = 50,
  onChange,
  size = 150,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  const [currentValue, setCurrentValue] = useState(value);

  // Add this useEffect to synchronize with parent component
  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  const calculateAngle = (clientX, clientY) => {
    const bounds = sliderRef.current.getBoundingClientRect();
    const center = {
      x: bounds.left + bounds.width / 2,
      y: bounds.top + bounds.height / 2,
    };

    let angle =
      (Math.atan2(clientY - center.y, clientX - center.x) * 180) / Math.PI;
    angle = (angle + 360) % 360; // Normalize to 0-360

    // Convert angle to value
    const normalizedValue = Math.round(
      (((angle + 90) % 360) / 360) * (max - min) + min
    );
    return normalizedValue;
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    const newValue = calculateAngle(e.clientX, e.clientY);
    setCurrentValue(newValue);
    onChange?.(newValue);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const newValue = calculateAngle(e.clientX, e.clientY);
    setCurrentValue(newValue);
    onChange?.(newValue);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleClick = (e) => {
    const newValue = calculateAngle(e.clientX, e.clientY);
    setCurrentValue(newValue);
    onChange?.(newValue);
  };

  // Calculate the position of the handle
  const angle = ((currentValue - min) / (max - min)) * 360 - 90;
  const radians = (angle * Math.PI) / 180;
  const radius = size / 2 - 20; // Adjust for padding and handle size
  const handleX = radius * Math.cos(radians);
  const handleY = radius * Math.sin(radians);

  return (
    <div
      className="circular-slider"
      ref={sliderRef}
      style={{ width: size, height: size }}
      onClick={handleClick}
    >
      <svg width={size} height={size}>
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          className="slider-track"
        />

        {/* Progress arc */}
        <path
          d={`
            M ${size / 2},${size / 2}
            m 0,-${radius}
            a ${radius},${radius} 0 1,1 0,${2 * radius}
            a ${radius},${radius} 0 1,1 0,-${2 * radius}
          `}
          className="slider-progress"
          style={{
            strokeDasharray: `${
              (currentValue / max) * (2 * Math.PI * radius)
            } ${2 * Math.PI * radius}`,
          }}
        />

        {/* Handle */}
        <circle
          cx={size / 2 + handleX}
          cy={size / 2 + handleY}
          r={10}
          className="slider-handle"
          onMouseDown={handleMouseDown}
        />
      </svg>

      {/* Value display */}
      <div className="slider-value">{currentValue}</div>
    </div>
  );
};

export default CircularSlider;
