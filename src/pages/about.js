import React from "react"
import Box from '#components/atoms/Box';
import SEO from "../components/SEO"

import { NavBar, AboutText } from '#components/app';

const About = () => {
    return (
      <Box>
       <SEO title="About page" />
        <NavBar></NavBar>
        <AboutText></AboutText>
      </Box>
    )
}

export default About