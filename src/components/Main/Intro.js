import { BsArrowUpRight } from "react-icons/bs";
import styled from "styled-components";
import { Col, Row } from "../Essentials/Grid";

const IntroText = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 5rem;
`;


function Intro() {
    return (
        <div>
                <IntroText>
                    <h1 style={{fontSize: '100px'}}>
                        Hello.
                    </h1>
                    <div style={{fontSize: '30px', padding: '0 3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', backgroundColor: 'white', height: '100vh', opacity: 0.6}}>
                        <div>
                            <Row>
                                <Col size={1} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                                    <h3>Myself</h3>
                                </Col>
                                <Col size={1} style={{margin: '0 2rem'}}>
                                    <hr style={{position:'relative', width: '70%', backgroundColor: '#007577', height: '10px', top: '45%', left: '-35%'}}></hr>
                                    <hr style={{position: 'relative', width:'50%', height: '50%', borderLeft: '10px solid #007577', borderTop: '10px solid #007577', borderBottom: '10px solid #007577', top: '15%', left: '25%'}}></hr>

                                </Col>
                                <Col size={1}>
                                    <Row style={{flexDirection: 'column'}}>
                                        <Col size={1}>
                                        <h3 style={{fontWeight: 'bold', fontSize: '50px', color: '#006400'}}>WEB/MOBILE DEVELOPER</h3>
                                        </Col>
                                        <Col size={1}>
                                            <ul style={{float: 'left'}}>
                                                <li style={{listStyleType: 'none', fontWeight: 'bold', fontSize: '40px'}}>tech savvy</li>
                                                <li style={{listStyleType: 'none', fontWeight: 'bold', fontSize: '40px'}}>gamer</li>
                                                <li style={{listStyleType: 'none', fontWeight: 'bold', fontSize: '40px'}}>foodie</li>
                                                <li style={{listStyleType: 'none', fontWeight: 'bold', fontSize: '40px'}}>musician</li>
                                            </ul>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        
                           
                        </div>

                        <div>
                            <h3>I believe in specialization.</h3>
                            <h3>I believe that everyone in the society has a role to bring valued input to the table. </h3>
                        </div>
                    
                    </div>
                </IntroText>  
         
        </div>
       
    )
}

export default Intro;