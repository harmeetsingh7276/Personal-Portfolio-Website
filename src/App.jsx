import React, { useState } from "react";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Nav from "./components/nav/Nav";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/porfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "swiper/swiper-bundle.css";
import SwiperCore, { Autoplay } from "swiper";
import { Analytics } from "@vercel/analytics/react";
import ReactGA from "react-ga";

const GA_TRACKING_ID = "UA-196441380-1"; //Google analytics TRACKING ID
ReactGA.initialize(GA_TRACKING_ID);

export default function App() {
  SwiperCore.use([Autoplay]);

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  var lst=[]
  const[showFlag,setShowFlag]=useState(false)
  function handleOnChangeName(e){
      setName(e.target.value);
  }
  function handleOnChangeEmail(e){
    setEmail(e.target.value);
  }
  function addDataToListAndShow(e){
    setShowFlag(!showFlag);
    lst.push({"name":{name},"email":{email}})
  }
  
  return (
    <>
      <form action="">
        <input type="text" onChange={handleOnChangeName} name="name"/>
        <input type="text" onChange={handleOnChangeEmail} name="email"/>
        <button name="add" onClick={addDataToListAndShow}>Add</button>
        <button name="submit">Submit</button>
      </form>

      {showFlag &&
       
      }

      


    </>
  );
}
