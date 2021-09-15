import { useEffect, useState } from "react";
import styled from "styled-components";
import { Nav, NavButtonLink, NavLink, NavMenu } from "./NavbarElements";


function Navbar(props) {

    const [scrollTop, setScrollTop] = useState(0);

    const [experienceHighlight, setExperienceHighlight] = useState(false);
    const [skillHighlight, setSkillHighlight] = useState(false);
    const [educationHighlight, setEducationHighlight] = useState(false);
    const [contactHighlight, setContactHighlight] = useState(false);

    var refs = props.refs;

    useEffect(() => {
        const onScroll = e => {
            setScrollTop(window.scrollY);
        }

        window.addEventListener("scroll", onScroll)
 
        if (scrollTop < refs.skill.current.offsetTop) {
            setSkillHighlight(false);
        }
        
        if (scrollTop >= refs.skill.current.offsetTop - 5 && scrollTop < refs.experience.current.offsetTop - 5) {
            setSkillHighlight(true);
            setExperienceHighlight(false);
        }

        if (scrollTop >= refs.experience.current.offsetTop - 5 && scrollTop < refs.education.current.offsetTop - 5) {
            setSkillHighlight(false);
            setExperienceHighlight(true);
            setEducationHighlight(false);
        }

        
        if (scrollTop >= refs.education.current.offsetTop - 5 && scrollTop < refs.contact.current.offsetTop - 5) {
            setExperienceHighlight(false);
            setEducationHighlight(true);
            setContactHighlight(false);
        }

        if (scrollTop >= refs.contact.current.offsetTop) {
            setEducationHighlight(false);
            setContactHighlight(true)
        }
        
        return () => window.removeEventListener("scroll", onScroll);
        
    }, [scrollTop])

    const CurrentHighlight = styled.div`
        border-bottom: ${props => props.current ? '5px solid black': 'none'}
    `

    return (
        <Nav>
       
            <NavMenu>
                <NavButtonLink to="/#home" smooth>
                    <div style={{height: '50%', position: 'relative', top: '10vh'}}>
                        <img style={{borderRadius: "50%"}} src="Portrait_Round.jpg" width="100%" height="100%" />
                    </div>
                </NavButtonLink>
                <NavLink to="/#skills" smooth><CurrentHighlight current={skillHighlight}>Skills</CurrentHighlight></NavLink>
                <NavLink to="/#experiences" smooth><CurrentHighlight current={experienceHighlight}>Experiences</CurrentHighlight></NavLink>
                <NavLink to="/#education" smooth><CurrentHighlight current={educationHighlight}>Education</CurrentHighlight></NavLink>
                <NavLink to="/#contact" smooth><CurrentHighlight current={contactHighlight}>Contacts</CurrentHighlight></NavLink>
            </NavMenu>
        </Nav>
    )
}

export default Navbar;