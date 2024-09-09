import styled from "styled-components";

const Page = styled.main`
    height: fit-content;
    min-height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;

    padding: 90px 6rem 60px 6rem;
`;

const LightPage = styled(Page)`
    background-color: #fff;
    color: #000;
`;

const DarkPage = styled(Page)`
    background-color: #535251;
    color: #fff;
`;

export { LightPage, DarkPage };