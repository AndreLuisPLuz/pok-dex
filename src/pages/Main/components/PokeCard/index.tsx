import { ReactNode, useContext } from "react";
import { DarkCard, LightCard } from "./style";
import { ThemeContext } from "../../../../contexts/theme";
import { match } from "ts-pattern";

const PokeCard = (): ReactNode => {
    const theme = useContext(ThemeContext);

    return match(theme)
        .with({ palette: "light" }, () => <LightCard/>)
        .with({ palette: "dark" }, () => <DarkCard/>)
        .exhaustive();
};

export default PokeCard;