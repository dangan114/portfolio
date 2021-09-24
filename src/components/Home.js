import { Col, Row } from "./Essentials/Grid";
import Navbar from "./Navbar/Navbar";

import Intro from "./Main/Intro";
import Education from "./Main/Education";
import Skills from "./Main/Skills";
import Experiences from "./Main/Experiences";
import Contact from './Main/Contact';

import { useRef } from "react";
import styled from "styled-components";

function Home() {
    const introRef = useRef();
    const skillRef = useRef();
    const experienceRef = useRef();
    const educationRef = useRef();
    const contactRef = useRef();

    const NavbarCol = styled(Col)`
        @media and screen (max-width: 973px) {
            display: none;
        }
    `

    const HomeContainer = styled.div`
        // background-image: url(/background_mountain.gif);
        // background-repeat: no-repeat; 
        // background-size: cover;
        // display: inline-block;
        // position: fixed,
        // height: 100vh;
        // top: 0; 
        // left: 0;  
        // overflow-y: scroll;
      
        // @media (min-width: 972px) {
        //     height: 100%;
        //     background-attachment: fixed;
        // }

        // // @media (max-width: 972px) {
        // //     position: fixed,
        // //     height: 100vh;
        // //     top: 0; 
        // //     left: 0;  
        // //     overflow-y: scroll;
        // // }
    
    `

    const Image = styled.img`
        src: ${props => props.src};
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: -999;
    `

    return ( 
        <HomeContainer>
            <Image src="background_mountain.gif" />
            <Row>
                {/* The parent element must be the whole page so the sticky element can stick! */}
                <NavbarCol size={1}>
                    <Navbar refs={{ intro: introRef, skill: skillRef, experience: experienceRef, education: educationRef, contact: contactRef }} />
                </NavbarCol>
                
                <Col size={4} style={{width: '100%'}}>
                    <div ref={introRef} id="home" style={{ marginBottom: '50vh 0'}}>
                        <Intro />
                    </div>
                
                    <div ref={skillRef} id="skills" style={{ margin: '50vh 0'}}>
                        <Skills />
                    </div>

                    <div ref={experienceRef} id="experiences" style={{ margin: '50vh 0'}}>
                        <Experiences />
                    </div>

                    <div ref={educationRef} id="education" style={{ margin: '50vh 0'}}>
                        <Education />
                    </div>

                    <div ref={contactRef} id="contact" style={{ marginTop: '50vh'}}>
                        <Contact />
                    </div>
                    
                </Col>     
            </Row>
        </HomeContainer>
    )
}

export default Home;