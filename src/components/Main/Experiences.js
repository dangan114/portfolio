import styled from "styled-components";
import { Col, Row } from "../Essentials/Grid";
import { MY_PROJECTS } from "../Essentials/MyInformation";

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
        background-color: #cccccc;
        color: #111111;
    `

    const BackBox = styled.div`
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        background-color: #8ebf42;
        color: #eeeeeee;
        transform: rotateY(180deg);
    `

    var projects = MY_PROJECTS;

    const projectCard = projects.map(project => {
        return (
            <Col size={1} style={{margin: '5rem 0'}}>
                {/*  The project card */}
                <Box>
                    <InnerBox>
                        <FrontBox>
                        <h1 style={{height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                {project.name}
                            </h1>
                        </FrontBox>

                        <BackBox>
                            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', margin: 'auto'}}>
                                <div>
                                    <img src={project.images[0]} width="100vw" height="100vh" />         
                           
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
                {/* <div style={{ border: '5px solid red', backgroundColor: 'white', boxShadow: '10px 10px 8px #888888', width: '30vw'}}>
                
                        <h1 style={{height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            {project.name}
                        </h1>
                    {/* <div style={{borderTop: '5px solid red'}}>
                        <div style={{textAlign: 'center'}}>
                            <img src={project.images[0]} width="100vw" height="100vh" />
                            <img src={project.images[0]} width="100vw" height="100vh" />
                            <img src={project.images[0]} width="100vw" height="100vh" />
                            <img src={project.images[0]} width="100vw" height="100vh" />
                        </div>
                        <div>
                            <ul>

                            {project.description.map(desc => {
                                return <li>{desc}</li>
                            })}
                            </ul>
                        </div>
                </div>
          </div> */}
          
      </Col>
        );
    })

    return (
        <div>
            <h1>Experiences</h1>
            <Row>
               { projectCard }
            </Row>
        </div>
    )
}

export default Experiences;