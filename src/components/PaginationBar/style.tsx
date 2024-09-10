import styled from "styled-components";

const Row = styled.div`
    height: 25px;
    width: fit-content;

    display: flex;
    flex-direction: row;
    align-items: center;

    border: 4px #535251;
`;

const Button = styled.button`
    height: 100%;
    width: fit-content;
    min-width: 30px;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    padding: 0.5rem;

    border: 1px solid #535251;
    border-right: none;

    cursor: pointer;
`;

const RoundedLeftButton = styled(Button)`
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`;

const RoundedRightButton = styled(Button)`
    border-right: 1px solid #535251;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`;

const Input = styled.input`
    height: 18px;
    width: 30px;
`;

export {
    Row,
    Button,
    RoundedLeftButton,
    RoundedRightButton,
    Input
};