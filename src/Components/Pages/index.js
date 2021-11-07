import HeroSection from "../Herosection";
import Navbar from "../Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "../Sidebar";
import { useState } from "react";
import Infosection from "../infoSection";
import { homeobjOne, homeobjThree, homeobjTwo } from "../infoSection/Data";
import Services from "../Services";
import Footer from "../Footer";
function Home() {
  const [isOpen, setISOpen] = useState(false);
  const toggle = () => {
    setISOpen(!isOpen);
  };
  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Infosection {...homeobjOne} />
      <Infosection {...homeobjTwo} />
      <Services />
      <Infosection {...homeobjThree} />
      <Footer />
    </Router>
  );
}

export default Home;
