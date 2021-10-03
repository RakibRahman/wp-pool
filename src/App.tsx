import React from "react";
import "animate.css";

import { Nav } from "./components/nav/Nav";
import { Header } from "./components/header/Header";
import { CardContainer } from "./components/card/CardContainer";
import { Banner } from "./components/Banner/Banner";
function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <CardContainer />
      <Banner />
    </div>
  );
}

export default App;
