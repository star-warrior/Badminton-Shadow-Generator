import './App.css';
import HomePage from './components/Home-page/Homepage';
import Login from './components/Login/Login';
import { Routes, Route } from 'react-router-dom';
import Practice from './components/practise/Practice';
import Corner from "./components/Corner/Index.jsx";
import Start from './components/Start/Start';
import { useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {
  // State for corner selection
  const [corners, setCorners] = useState(["frontLeft", "frontRight", "midLeft", "midRight", "backLeft", "backRight"]);

  // State for all circular slider values
  const [parameterValues, setParameterValues] = useState({
    shots: 10,
    sets: 1,
    difficulty: 1,
    cooldown: 30
  });

  // Function to update parameter values from sliders
  const handleParameterChange = (paramName, value) => {
    setParameterValues(prev => ({
      ...prev,
      [paramName]: value
    }));
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/practice"
          element={
            <Practice
              parameterValues={parameterValues}
              onParameterChange={handleParameterChange}
            />
          }
        />
        <Route
          path="practice/corner"
          element={
            <Corner
              corners={corners}
              setCorners={setCorners}
            />
          }
        />
        <Route
          path="practice/start"
          element={
            <Start
              corners={corners}
              parameterValues={parameterValues}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;