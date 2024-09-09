import styled from "styled-components";

const Nav = styled.nav`
    position: fixed;

    height: 50px;
    width: 100vw;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    padding: 0 3rem 0 3rem;

    background-color: #d84b4b;
    border-bottom: 2px solid #000;
`;

const Column = styled.div`
    height: 100%;
    width: auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
`;

export { Nav, Column };