import styled from "styled-components";

const Page = styled.main`
    height: fit-content;
    min-height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;

    padding: 60px 3rem 60px 3rem;
`;

const LightPage = styled(Page)`
    background-color: #fff;
    color: #000;
`;

const DarkPage = styled(Page)`
    background-color: #3f3e3d;
    color: #fff;
`;

export { LightPage, DarkPage };