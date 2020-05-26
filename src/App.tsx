import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./assets/styles/main.css";
import { DooDooBody } from "./components/DooDooBody";
import { DooDooHeader } from "./components/DooDooHeader";

const App: React.FC = () => {
  return (
    <div className="flex flex-col py-4 lg:py-10 px-4 items-center bg-brown bg-opacity-75 h-screen">
      <DooDooHeader></DooDooHeader>
      <DooDooBody></DooDooBody>
    </div>
  );
};

export default App;
