// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header/Header";
import Landing from "./components/landing/Landing";
import WelcomeFrame from "./components/welcomeFrame/WelcomeFrame";
import Carousel from "./components/carousel/Carousel";
import PodcastGrid from "./components/podcastGrid/PodcastGrid";
import VisitFrame from "./components/visitFrame/VisitFrame";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Landing />
        <WelcomeFrame />
        <Carousel />
        <PodcastGrid />
        <VisitFrame />
      </div>
    </>
  );
}

export default App;
