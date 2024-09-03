import React,{ useRef, useEffect } from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import About from "../components/About";
import Footer from "./Footer";

const Images = [
  {
    src: "https://blogs.nottingham.ac.uk/studentlife/files/2017/08/pexels-photo-267885.jpeg",
    text: "Welcome to BMS Connect ",
    text1:"- Your Gateway to College Life!"
  },
  {
    src: "/assets/DSC_0006.JPG",
    text: "Discover, Engage, and Thrive ",
    text1:"We are your go-to platform for accessing all the latest information on extracurricular activities, clubs, and events happening around your college campus",
  },
  {
    src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    text: "Connect and Explore",
    text1: "Stay informed and never miss out on exciting opportunities. Our platform keeps you updated with the latest events, workshops, seminars, and club activities happening across campus."}
];

function Home() {
 

  return (
    <div className="home-section">
      <Header />
      <Slider images={Images} />
      <About  />
      <Footer/>
    </div>
  );
}

export default Home;
