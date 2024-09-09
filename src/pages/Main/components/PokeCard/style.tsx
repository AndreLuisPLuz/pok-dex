import styled from "styled-components";

const Card = styled.div`
    height: 300px;
    width: 300px;

    display: flex;
    flex-direction: column;

    border-radius: 20px;
    box-shadow: 1rem;
`;

const LightCard = styled(Card)`
    background-color: #faf7f7;
    color: #000;

    border: 2px solid #535251;
`;

const DarkCard = styled(Card)`
    background-color: #666563;
    color: #fff;

    border: 2px solid #fff;
`;

export { LightCard, DarkCard };