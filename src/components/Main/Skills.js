import { Col, Row } from "../Essentials/Grid";
import { BsStar, BsStarFill } from 'react-icons/bs';

import { MY_LANGUAGES, MY_TECHNOLOGY } from "../Essentials/MyInformation";

function Skills() {   

    var languages = MY_LANGUAGES;
    var technology = MY_TECHNOLOGY;

    const ratingDisplay = (rating) => {
        var filled = [...Array(rating)].map((e, i) => {
            return (
                <span key={i}><BsStarFill color="yellow" size="30px" /></span>
            )
        });
        var notFilled = [...Array(5 - rating)].map((e, i) => {
            return (
                <span key={i}><BsStar color="yellow" size="30px" /></span>
            )
        })

        return [filled, notFilled];
    }

    const skillsDisplay = (languages) => languages.map(language => {
        return (
            <div style={{margin: '5rem 0'}}>
                <button style={{borderRadius: '40%', fontSize: '25px'}}>{language.name}</button>
                <div>
                    {ratingDisplay(language.rating)}
                </div>
            </div>
        )
    })

    return (
        <div style={{ textAlign: 'center'}}>
            <h1>Skills</h1>
            <Row>
                <Col size={1}>
                    <h1>Language</h1>
                    { skillsDisplay(languages) }
                </Col>

                <Col size={1}>
                    <h1>Technology</h1>
                    { skillsDisplay(technology)}
                </Col>
            </Row>
        </div>
      
    )
}

export default Skills;