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
        top: -80px;
        width: 3%;
        height: 10rem;
        background-color: lightblue;
    `;

    const LogoCol = styled(Col)`
        flex: ${props => props.size};
        @media (max-width: 768px) {
            display: none;
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
                    <li style={{listStyleType: 'none'}}>
                        <Row>
                            <LogoCol size="1">
                                <img src={e.logo} height="100%" width="100%" style={{objectFit: 'contain'}} />
                                <ConnectingLine style={{visibility: 'hidden'}}></ConnectingLine>
                            </LogoCol>
                            <Col size="3">
                                <EducationText>
                                    <h1>{e.school}</h1>
                                    <h2><span>GPA: {e.GPA}</span><span style={{margin: 'auto 10px'}}>&#9775;</span><span>Graduation Date: {e.graduation}</span></h2>
                                </EducationText>
                            </Col>
                        </Row>
                    </li>  
                )
            } else {
                return (
                    <li style={{listStyleType: 'none'}}>
                         <Row>
                            <LogoCol size="1">
                                <img src={e.logo} height="100%" width="100%" style={{objectFit: 'contain'}}  />
                                <ConnectingLine></ConnectingLine>
                            </LogoCol>
                            <Col size="3">
                                <EducationText>
                                    <h1>{e.school}</h1>
                                    <h2><span>GPA: {e.GPA}</span><span style={{margin: 'auto 10px'}}>&#9775;</span><span>Graduation Date: {e.graduation}</span></h2>
                                </EducationText>
                            </Col>
                        </Row>
                      
                    </li>  
                )
            }

            
        })
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Education</h1>
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