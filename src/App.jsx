import React from "react";
import "./index.css";
import Hero from "./components/Hero";
const App = () => {
  return (
    <main>
      <Hero />
      <section className="z-0 min-h-screen bg-blue-500"></section>
    </main>
  );
};

export default App;
