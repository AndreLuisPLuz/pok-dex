import styled from "styled-components";

const Nav = styled.nav`
    position: fixed;

    height: 50px;
    width: 100vw;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    
    padding: 0 3rem 0 3rem;

    background-color: #d84b4b;
    border-bottom: 2px solid #000;
`;

const Icon = styled.img`
    height: 35px;
    width: auto;
`;

export { Nav, Icon };