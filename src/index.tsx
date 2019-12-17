import * as React from "react";
import { render } from "react-dom";
import { Header } from "./Header/Header";
import "./styles.css";

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
