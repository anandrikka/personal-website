import React from "react";

import Intro from './Intro';
import SoftSkills from './SoftSkills';
import HardSkills from "./HardSkills";
import Experience from "./Experience";
import Education from "./Education";
import Academica from './Academica';
import ContactMe from '../ContactMe';
import Footer from '../Footer';

function Right() {
  return (
    <React.Fragment>
      <Intro />
      <SoftSkills />
      <HardSkills />
      <Experience />
      <Education />
      <Academica />
      <ContactMe />
      <Footer />
    </React.Fragment>
  );
}

export default Right;
