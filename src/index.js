import React from "react";
import { createRoot } from 'react-dom/client';
// import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "github-fork-ribbon-css/gh-fork-ribbon.css";

const rootElement = document.getElementById('root');
createRoot(rootElement).render(<App />);
// ReactDOM.render(<App />, document.getElementById("root"));
