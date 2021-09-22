import { useEffect } from "react";
import styled from "styled-components";
import { Col, Row } from "../Essentials/Grid";
import { MY_EDUCATION } from "../Essentials/MyInformation";

function Education() {

    const education = MY_EDUCATION;

    const ConnectingLine = styled.div`
        text-align: center;
        position: relative;
        margin: auto;
        padding: 4rem
        top: -20%;
        width: 1vw;
        height: 100%;
        background-color: lightblue;
    `;

    const LogoCol = styled(Col)`
        flex: ${props => props.size};
        @media (max-width: 768px) {
            display: none;
        }
    `

    const SchoolCol = styled(Col)`
        flex: ${props => props.size};
        @media (max-width: 768px) {
            margin: 10rem 0;
            background-color: white;
            opacity: 0.75;
            padding: 4rem;
        }
    `

    const SchoolList = styled.li`
        list=style-type: none;
        background-color: white;
        margin: 0 2rem;
        opacity: 0.75;

        @media (max-width: 768px) {
            background-color: inherit;
        }
    `

    const EducationText = styled.div`
        text-align: center;
        height: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `

    const educationDisplay = (edu) => {
        return edu.map((e, i) => {
            // the last item does not need connecting line
            if (i == edu.length - 1) {
                return (
                    <SchoolList>
                        <Row>
                            <LogoCol size="1" style={{padding: '2rem'}}>
                                <img src={e.logo} height="100%" width="100%" style={{objectFit: 'contain'}} />
                                <ConnectingLine style={{visibility: 'hidden'}}></ConnectingLine>
                            </LogoCol>
                            <SchoolCol size="3">
                                <EducationText>
                                    <h1 style={{fontSize: '60px', fontWeight: 'bold'}}>{e.school}</h1>
                                    <h2><span>GPA: {e.GPA}</span><span style={{margin: 'auto 10px'}}>&#9775;</span><span>Graduation Date: {e.graduation}</span></h2>
                                </EducationText>
                            </SchoolCol>
                        </Row>
                    </SchoolList>  
                )
            } else {
                return (
                    <SchoolList>
                         <Row>
                            <LogoCol size="1" style={{padding: '2rem'}}>
                                <div>
                                    <img src={e.logo} height="100%" width="100%" style={{objectFit: 'contain', display: 'inline-block'}}  />
                                    
                                    <hr style={{position: 'relative', top: '5vh', height: '20vh', width: '1vw', backgroundColor: 'lightblue', border: 'none'}} />
                                </div>
              
                            </LogoCol>
                            <SchoolCol size="3">
                                <div>
                                    <EducationText>
                                        <h1 style={{fontSize: '60px', fontWeight: 'bold'}}>{e.school}</h1>
                                        <h2>{e.title}</h2>
                                        <h2><span>GPA: {e.GPA}</span><span style={{margin: 'auto 10px'}}>&#9775;</span><span>Graduation Date: {e.graduation}</span></h2>
                                    </EducationText>
                                </div>
                             
                            </SchoolCol>
                        </Row>
                      
                    </SchoolList>  
                )
            }

            
        })
    }

    return (
        <div>
            <h1 style={{textAlign: 'center', color: 'white', fontSize: '65px', textShadow: '0 0 5px #000'}}>Education</h1>
            <Row>
                <Col size={1}>
                    <ul>
                        {educationDisplay(education)}
                    </ul>
                </Col>
            </Row>
        </div>
    )
}

export default Education;