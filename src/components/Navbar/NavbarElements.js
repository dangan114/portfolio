import styled from 'styled-components'
import { HashLink as Link } from 'react-router-hash-link';

import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
    background: #007577;
    height: 100vh;
    position: sticky;
    top: 0;
    left: 0;
    opacity: 0.8;

    @media only screen and (max-width: 972px) {
        display: none;
    }
`;


export const NavMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
`;

export const NavLink = styled(Link)`
    color: #808080;
    text-decoration: none;

    font-size: 2rem;
    color: white;
    cursor: pointer;
    flex: 1;

    &.active {
        color: #000000;
    }
`;

export const NavButton = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;  
`;

export const NavButtonLink = styled(Link)`
    background: none;
    text-decoration: none;
`;