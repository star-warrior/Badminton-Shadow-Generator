import './App.css';
import HomePage from './components/Home-page/Homepage';
import Login from './components/Login/Login';
import { Routes, Route } from 'react-router-dom';
import Practice from './components/practise/Practice';
import Corner from "./components/Corner/Index.jsx";
import Start from './components/Start/Start';
import { useState } from 'react';
import Completion from './components/Completion/Completion';


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

  const [googleToken, setGoogleToken] = useState(null);

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
        <Route path="/" element={<HomePage googleToken={googleToken} />} />
        <Route path="/login" element={<Login googleToken={googleToken} setGoogleToken={setGoogleToken} />} />
        <Route
          path="/practice"
          element={
            <Practice
              parameterValues={parameterValues}
              onParameterChange={handleParameterChange}
              googleToken={googleToken}
            />
          }
        />
        <Route
          path="practice/corner"
          element={
            <Corner
              corners={corners}
              setCorners={setCorners}
              googleToken={googleToken}
            />
          }
        />
        <Route
          path="practice/start"
          element={
            <Start
              corners={corners}
              parameterValues={parameterValues}
              googleToken={googleToken}
            />
          }
        />
        <Route path="/completion" element={<Completion googleToken={googleToken} />} />
      </Routes>
    </div>
  );
}

export default App;