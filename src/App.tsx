import React from "react";
import "animate.css";

import { Nav } from "./nav/Nav";
import { Header } from "./header/Header";
import { CardContainer } from "./card/CardContainer";
function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <CardContainer />
    </div>
  );
}

export default App;
