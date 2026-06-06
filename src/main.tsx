import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">First React App</p>
        <h1>Hello, React.</h1>
        <p className="intro">
          This is a small, clean starting point for learning React, TypeScript,
          and modern frontend development.
        </p>
        <a className="button" href="https://react.dev" target="_blank">
          Learn React
        </a>
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
