import styled from "styled-components";

const Button = styled.button`
    height: 40px;
    width: 40px;

    border-radius: 100%;
`;

const LightButton = styled(Button)`
    border: 2px solid #3f3e3d;
`;

const DarkButton = styled(Button)`
    border: 2px solid #fff
`;

export { LightButton, DarkButton };