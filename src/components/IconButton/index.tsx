import { ImgHTMLAttributes, ReactNode, useContext } from "react";
import { ThemeContext } from "../../contexts/theme";
import { DarkButton, LightButton } from "./style";
import { match } from "ts-pattern";
import Icon from "../Icon";

type IconButtonProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>
} & Omit<ImgHTMLAttributes<HTMLImageElement>, "onClick">;

const IconButton = (props: IconButtonProps): ReactNode => {
    const theme = useContext(ThemeContext);

    return match(theme)
        .with({ palette: "light" }, () => <LightVariant { ...props }/>)
        .with({ palette: "dark" }, () => <DarkVariant { ...props }/>)
        .exhaustive();
};

const LightVariant = ({ src, alt, onClick, ...props }: IconButtonProps): ReactNode => {
    return (
        <LightButton onClick={ onClick }>
            <Icon src={ src } alt={ alt } { ...props }/>
        </LightButton>
    );
};

const DarkVariant = ({ src, alt, onClick, ...props }: IconButtonProps): ReactNode => {
    return (
        <DarkButton onClick={ onClick }>
            <Icon src={ src } alt={ alt } { ...props }/>
        </DarkButton>
    );
};

export default IconButton;