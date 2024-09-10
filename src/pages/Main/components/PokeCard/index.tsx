import { ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { DarkCard, Footer, LightCard, PokeSprite } from "./style";
import { ThemeContext } from "../../../../contexts/theme";
import { match } from "ts-pattern";
import { PokeCardData } from "../../../../api/types/pokeCardData";
import Typography from "../../../../components/Typography";
import { fetchPokemonCardService } from "../../../../api/services/pokemonService";

type PokeCardProps = {
    id: number;
};

const PokeCard = (props: PokeCardProps): ReactNode => {
    const theme = useContext(ThemeContext);

    return match(theme)
        .with({ palette: "light" }, () =>
            <LightCard>
                <Content {...props}/>
            </LightCard>
        )
        .with({ palette: "dark" }, () =>
            <DarkCard>
                <Content {...props}/>
            </DarkCard>
        )
        .exhaustive();
};

const Content = (props: PokeCardProps): ReactNode => {
    const [pokemonData, setPokemonData] = useState<PokeCardData | null>(null);
    const [isDataMissing, setIsDataMissing] = useState<boolean>(false);

    const handleRequest = useCallback(async () => {
        if (props.id > 151)
            return;

        try {
            const response = await fetchPokemonCardService(props.id);
            setPokemonData(response);
        } catch (NotFoundError) {
            setPokemonData(null);
            setIsDataMissing(true);
        }
    }, []);

    useEffect(() => {
        handleRequest();
    }, []);

    return (
        <>
            <PokeSprite src={ pokemonData?.spriteUrl || "https://blog.i13websolution.com/wp-content/uploads/psc_post_slider_carousel/no-image-available-grid_200_200.jpg" }/>
            <Footer>
                <Typography variant="p" fontSize="lg" fontWeight="bold">{ pokemonData?.name || "[No name found]" }</Typography>
                <Typography variant="p" fontStyle="italic">#{ pokemonData?.id || " missing"}</Typography>
                { 
                    isDataMissing && 
                    <Typography variant="p" fontStyle="italic">Something went wrong.</Typography>
                }
            </Footer>
        </>
    );
};

export default PokeCard;