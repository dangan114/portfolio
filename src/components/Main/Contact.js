import { FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";
import { MY_BASIC } from "../Essentials/MyInformation";

function Contact() {

    const ContactContainer = styled.div`
        background-color: white;
        border-radius: 100%;
        height: 50rem;
        width: 50rem;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        opacity: 0.7;
    `

    const basic = MY_BASIC;

    function clickExternal(link) {
        window.open(link, '_blank');
    }

    return (
        <ContactContainer>
            <div>
                <h1 style={{fontSize: '5rem'}}>{basic.name}</h1>
                <button style={{margin: '2rem 0', fontSize: '2rem', height: '4rem', borderRadius: '20%'}}>
                    <a style={{padding: '1rem', textDecoration: 'none', color: 'inherit'}} href={"mailto:" + basic.email}>
                        Email me
                    </a>
                </button>

                <div>
                    <FaGithub onClick={() => clickExternal(basic.github)} size="4rem" />
                    <FaLinkedin onClick={() => clickExternal(basic.linkedin)} size="4rem" />
                </div>
         
            </div>
        </ContactContainer>
    )
}

export default Contact;