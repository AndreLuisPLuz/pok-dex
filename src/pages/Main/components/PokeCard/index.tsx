import { ReactNode, useContext } from "react";
import { DarkCard, Footer, LightCard, PokeSprite } from "./style";
import { ThemeContext } from "../../../../contexts/theme";
import { match } from "ts-pattern";
import { PokeCardData } from "../../../../api/types/pokeCardData";
import Typography from "../../../../components/Typography";

type PokeCardProps = {
    data: PokeCardData;
};

const PokeCard = (props: PokeCardProps): ReactNode => {
    const theme = useContext(ThemeContext);

    return match(theme)
        .with({ palette: "light" }, () => <LightVariant { ...props }/>)
        .with({ palette: "dark" }, () => <DarkVariant { ...props }/>)
        .exhaustive();
};

const LightVariant = (props: PokeCardProps): ReactNode => {
    return (
        <LightCard>
            <PokeSprite src={ props.data.spriteUrl }/>
            <Footer>
                <Typography variant="h2" fontWeight="bold">{ props.data.name }</Typography>
                <Typography variant="p" fontStyle="italic">#{ props.data.id }</Typography>
            </Footer>
        </LightCard>
    );
};

const DarkVariant = (props: PokeCardProps): ReactNode => {
    return (
        <DarkCard>
            <PokeSprite src={ props.data.spriteUrl }/>
            <Footer>
                <Typography variant="h2" fontWeight="bold">{ props.data.name }</Typography>
                <Typography variant="p" fontStyle="italic">#{ props.data.id }</Typography>
            </Footer>
        </DarkCard>
    );
};

export default PokeCard;