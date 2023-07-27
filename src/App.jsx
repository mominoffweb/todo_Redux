import React from "react";
import Headtodo from "./Headtodo";
import "../src/head.css";

function App() {
  return (
    <div className=" flex items-center justify-center mt-6">
      <div className=" md:w-[40%] rounded-lg bg-slate-600  p-7 text-white gap-7">
        <h1 className="text-5xl font-bold mb-6 text-center">Todo App</h1>
        <Headtodo />
      </div>
    </div>
  );
}

export default App;
