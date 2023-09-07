import React from "react";
import AboutUs from "./components/AboutUs";
import Landing from "./components/Landing";
import Productive from "./components/Productive";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <React.Fragment>
      <Landing />
      <div className="bg-[#181F2B]">
        <AboutUs />
        <Productive />
        <Testimonials />
      </div>
    </React.Fragment>
  );
}
