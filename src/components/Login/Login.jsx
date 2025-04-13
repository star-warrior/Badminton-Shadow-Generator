import React from "react";
import "./Login.css";
import Navbar from "../Navbar/Navbar";

const Login = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="login-container">
        <div className="login-form">
          <h1>Login</h1>
          <p className="welcome-text">Welcome back</p>

          <button className="social-button google">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCI+PHBhdGggZmlsbD0iI0VBNDMzNSIgZD0iTTI0IDkuNWMzLjU0IDAgNi43MSAxLjIyIDkuMjEgMy42bDYuODUtNi44NUMzNS45IDIuMzggMzAuNDcgMCAyNCAwIDEyLjU3IDAgMy41IDcuNjUgMS41NCAxOC45bDguMDgtNi4yNkMxMi4yMyAxMC4yMSAxNy43IDkuNSAyNCA5LjV6Ii8+PHBhdGggZmlsbD0iIzM0QTg1MyIgZD0iTTQ2Ljk4IDI0LjU1YzAtMS41Ny0uMTUtMy4wOS0uMzgtNC41NUgyNHY5LjAyaDEyLjk0YTExLjAxOCAxMS4wMTggMCAwIDEtNC43OCA3LjE4bDcuNzMgNmMxLjUxLTEuNDEgMi43OS0zLjEgMy44My01LjAyIDEuNzMtMy4xOCAyLjczLTYuODYgMi43My0xMC44M3oiLz48cGF0aCBmaWxsPSIjNDI4NUY0IiBkPSJNMTQuMDIgMjguODRjLS40My0xLjI1LS42OC0yLjU4LS42OC0zLjk0IDAtMS4zNy4yNS0yLjY5LjY4LTMuOTRMNi42MiAxMi43QzQuMTEgMTUuOCAyLjUgMTkuNjkgMi41IDI0YzAgNC4zMSAxLjYxIDguMjUgNC4xIDExLjNsNy40Mi01Ljc2eiIvPjxwYXRoIGZpbGw9IiNGQkJDMDUiIGQ9Ik0yNCA0OGM2LjQ4IDAgMTEuOTMtMi4xMyAxNS44OS01LjgxbC03LjczLTZjLTIuMTUgMS40NS00LjkyIDIuMy04LjE2IDIuMyAtNi4zIDAtMTEuNzctNC4yOC0xMy42OC0xMC4wNGwtNy40MiA1Ljc2QzUuODggNDEuODkgMTQuNDMgNDggMjQgNDh6Ii8+PC9zdmc+"
              alt="Google"
            />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
