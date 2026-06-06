import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  function handleLogin() {
    alert("Login clicked");
  }

  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">First React App</p>
        <h1>Hello, React.</h1>
        <p className="intro">
          This is a small, clean starting point for learning React, TypeScript,
          and modern frontend development.
        </p>
        <div className="actions">
          <button className="button" type="button" onClick={handleLogin}>
            Login
          </button>
          <a
            className="button buttonSecondary"
            href="https://react.dev"
            target="_blank"
          >
            Learn React
          </a>
        </div>
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
