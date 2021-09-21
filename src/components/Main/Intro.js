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

const ImageTag = styled.img`
    width: 100%;
    height: 100%;
    src: ${props => props.src};
    alt: ${props => props.alt};
`;

function Intro() {
    return (
        <Row>
            <Col>
                <IntroText>
                    <h1 style={{fontSize: '100px'}}>
                        Hello.
                    </h1>
                    <div style={{fontSize: '30px', padding: '0 8rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', backgroundColor: 'white', height: '80vh', opacity: 0.6}}>
                        <h3>I am a web/mobile developer/tech savvy/gamer/foodie.</h3>
                        <h3>I believe in specialization. </h3>
                        <h3>I believe that everyone in the society has a role to bring valued input to the table. </h3>
                    </div>
                </IntroText>
            
            </Col>
            {/* <Col size={1}>
                <div>
                    <ImageTag src="/1200px-Virginia_Tech_seal.png" alt="My_Portrait"/>
                </div>
            </Col> */}
        </Row>
    )
}

export default Intro;