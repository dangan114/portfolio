import { Col, Row } from "../Essentials/Grid";
import { BsCircle, BsCircleFill } from 'react-icons/bs';
import { FaCheckCircle } from "react-icons/fa";
import { RiComputerFill } from 'react-icons/ri';

import { MY_LANGUAGES, MY_TECHNOLOGY } from "../Essentials/MyInformation";

function Skills() {   

    var languages = MY_LANGUAGES;
    var technology = MY_TECHNOLOGY;

    const ratingDisplay = (rating) => {
        var filled = [...Array(rating)].map((e, i) => {
            return (
                <span key={i} style={{margin: "0 1rem"}} ><FaCheckCircle color="white" size="30px" /></span>
            )
        });
        var notFilled = [...Array(5 - rating)].map((e, i) => {
            return (
                <span key={i} style={{margin: "0 1rem"}}><BsCircle color="white" size="30px" /></span>
            )
        })

        return [filled, notFilled];
    }

    const skillsDisplay = (languages) => languages.map(language => {
        return (
            <div style={{margin: '5rem 0'}}>
                <button style={{borderRadius: '20%', padding:'0.5rem', fontSize: '25px', fontFamily: 'Andale Mono, monospace', fontWeight: 'bolder'}}>{language.name}</button>
                <div style={{margin: '1rem 0'}}>
                    {ratingDisplay(language.rating)}
                </div>
            </div>
        )
    })

    return (
        <div style={{ textAlign: 'center'}}>
            <h1 style={{color: 'white', fontSize: '65px', textShadow: '0 0 5px #000'}}>Skills</h1>
            <div>
                <RiComputerFill size="4rem" style={{backgroundColor: '#007577', opacity: '0.8', color: 'white', position: 'relative', top: '-40px'}} />
                <RiComputerFill size="4rem" style={{backgroundColor: '#007577', opacity: '0.8', color: 'white', position: 'relative', top: '-40px'}} />
                <RiComputerFill size="4rem" style={{backgroundColor: '#007577', opacity: '0.8', color: 'white', position: 'relative', top: '-40px'}} />
            </div>
            <Row>
                <Col size={1}>
                    {/* <h1 style={{display: 'inline-block', padding: '1rem', backgroundColor: 'white', opacity: '0.6'}}>Language</h1> */}
                    { skillsDisplay(languages) }
                </Col>

                <Col size={1}>
                    {/* <h1 style={{display: 'inline-block', padding: '1rem', backgroundColor: 'white', opacity: '0.6'}}>Technology</h1> */}
                    { skillsDisplay(technology)}
                </Col>
            </Row>
        </div>
      
    )
}

export default Skills;