import React from "react";
import "./assets/styles/main.css";
import { DooDooBody } from "./components/DooDooBody";
import { DooDooHeader } from "./components/DooDooHeader";

const App: React.FC = () => {
  return (
    <div className="flex flex-col py-10 bg-brown bg-opacity-75 px-5 h-screen">
      <DooDooHeader></DooDooHeader>
      <DooDooBody></DooDooBody>
    </div>
  );
};

export default App;
