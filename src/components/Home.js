import { Col, Row } from "./Essentials/Grid";
import Navbar from "./Navbar/Navbar";

import Intro from "./Main/Intro";
import Education from "./Main/Education";
import Skills from "./Main/Skills";
import Experiences from "./Main/Experiences";
import { useRef } from "react";
import styled from "styled-components";

function Home() {
    const introRef = useRef();
    const skillRef = useRef();
    const experienceRef = useRef();
    const educationRef = useRef();
    const contactRef = useRef();

    const NavbarCol = styled(Col)`
        @media and screen (max-width: 768px) {
            display: none;
        }
    `

    return (
        <Row>
            {/* The parent element must be the whole page so the sticky element can stick! */}
            <NavbarCol size={1}>
                <Navbar refs={{ intro: introRef, skill: skillRef, experience: experienceRef, education: educationRef, contact: contactRef }} />
            </NavbarCol>
            
            <Col size={4} style={{margin: 'auto'}}>
                <div ref={introRef} id="home" style={{ marginBottom: '100vh'}}>
                    <Intro />
                </div>
            
                <div ref={skillRef} id="skills" style={{ marginBottom: '100vh'}}>
                    <Skills />
                </div>

                <div ref={experienceRef} id="experiences" style={{ marginBottom: '100vh'}}>
                    <Experiences />
                </div>

                <div ref={educationRef} id="education">
                    <Education />
                </div>

                <div ref={contactRef} id="contact">

                </div>
                
            </Col>     
        </Row>
    )
}

export default Home;