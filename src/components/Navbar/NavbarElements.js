import styled from 'styled-components'
import { HashLink as Link } from 'react-router-hash-link';

import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
    background: #861F41;
    height: 100vh;
    position: sticky;
    top: 0;
    z-index: 12;

    @media only screen and (max-width: 768px) {
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

    cursor: pointer;
    flex: 1;

    &.active {
        color: #000000;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #808080;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`


export const NavButton = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;  
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavButtonLink = styled(Link)`
    background: none;
    text-decoration: none;
`;