import styled from "styled-components";
import { Col, Row } from "../Essentials/Grid";
import { MY_PROJECTS } from "../Essentials/MyInformation";

import { SiJava, SiFlutter } from 'react-icons/si' 

function Experiences() {

    const Box = styled.div`
        background-color: transparent;
        width: 30vw;
        height: 60vh;
        border: 1px solid #eeeeee;
        perspective: 1000px; 
        margin: auto;
        
        @media only screen and (max-width: 768px) {
            width: 100vw;
            margin: '0 2rem';
        }
    `

    const InnerBox = styled.div`
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.5s;
        transform-style: preserve-3d;
        &:active {
            transform: rotateY(180deg);
        }
    `

    const FrontBox = styled.div`
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        background-color: white;
        opacity: 0.8;
        color: #111111;
    `

    const BackBox = styled.div`
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        background-color: #007577;
        opacity: 0.8;
        color: white;
        transform: rotateY(180deg);
    `

    var projects = MY_PROJECTS;

    const projectCard = projects.map(project => {
        return (
            <Col size={1} style={{margin: '5rem'}}>
                {/*  The project card */}
                <Box>
                    <InnerBox>
                        <FrontBox style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <h1 >
                                {project.name}
                            </h1>
                         
                            <div style={{fontSize: '50px', display: 'flex'}}>
                                {project.technology.map(tech => {
                                    return <div style={{margin: '0 1rem'}}>{tech}</div>
                                }
                                )}
                            </div>
                            
                          
                           
                        </FrontBox>

                        <BackBox>
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', margin: 'auto'}}>
                                <div>
                                    {/* <img src={project.images[0]} width="100vw" height="100vh" /> */}
                                    <ul>
                                    {project.description.map(desc => {
                                        return <li style={{listStyleType: 'none', padding: '1rem 0', textAlign: 'left'}}>{desc}</li>
                                    })}
                                    </ul>
                                </div>
                            </div>
                        </BackBox>
                       
                    </InnerBox>
                  
                </Box>
      </Col>
        );
    })

    return (
        <div>
            <h1 style={{textAlign: 'center', color: 'white', fontSize: '65px', textShadow: '0 0 5px #000'}}>Experiences</h1>
            <Row>
               { projectCard }
            </Row>
        </div>
    )
}

export default Experiences;