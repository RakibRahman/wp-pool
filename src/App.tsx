import React, { useEffect } from "react";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Nav } from "./components/nav/Nav";
import { Header } from "./components/header/Header";
import { CardContainer } from "./components/card/CardContainer";
import { Banner } from "./components/Banner/Banner";
import { About } from "./components/About/About";
import { Blog } from "./components/Blog/Blog";
import { Chat } from "./components/Chat/Chat";
import { Footer } from "./components/Footer/Footer";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="overflow-hidden App">
      <Nav />
      <Header />
      <CardContainer />
      <Banner />
      <About />
      <Blog />
      <Chat />
      <Footer />
    </div>
  );
}

export default App;
