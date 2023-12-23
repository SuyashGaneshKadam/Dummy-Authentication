import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import "./App.css"

const container = document.getElementById("container");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
// ReactDOM.render(<App/>, document.getElementById("root"));
