import styled from "styled-components";
import { Col, Row } from "../Essentials/Grid";

const IntroText = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
            <Col size={2}>
                <IntroText>
                    <h1>
                        Web/Mobile Developer
                    </h1>
                    <h3>
                        I believe in specialization. 
                        I believe that everyone in the society has a role to bring valued input to the table. 
                        Hence everyone should be treated with respect and dignity.
                    </h3>
                    <button>
                        Hire me
                    </button>
                </IntroText>
            
            </Col>
            <Col size={1}>
                <div>
                    <ImageTag src="/1200px-Virginia_Tech_seal.png" alt="My_Portrait"/>
                </div>
            </Col>
        </Row>
    )
}

export default Intro;