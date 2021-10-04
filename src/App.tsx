import React from "react";
import "animate.css";

import { Nav } from "./components/nav/Nav";
import { Header } from "./components/header/Header";
import { CardContainer } from "./components/card/CardContainer";
import { Banner } from "./components/Banner/Banner";
import { About } from "./components/About/About";
import { Blog } from "./components/Blog/Blog";
import { Chat } from "./components/Chat/Chat";
function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <CardContainer />
      <Banner />
      <About />
      <Blog />
      <Chat />
    </div>
  );
}

export default App;
