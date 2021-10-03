import React from "react";
import "animate.css";

import { Nav } from "./components/nav/Nav";
import { Header } from "./components/header/Header";
import { CardContainer } from "./components/card/CardContainer";
import { Banner } from "./components/Banner/Banner";
import { About } from "./components/About/About";
import { Blog } from "./components/Blog/Blog";
function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <CardContainer />
      <Banner />
      <About />
      <Blog />
    </div>
  );
}

export default App;
