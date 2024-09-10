import { ReactNode, useContext, useEffect, useState } from "react";
import { DarkCard, Footer, LightCard, PokeSprite } from "./style";
import { ThemeContext } from "../../../../contexts/theme";
import { match } from "ts-pattern";
import { PokeCardData } from "../../../../api/types/pokeCardData";
import Typography from "../../../../components/Typography";

type PokeCardProps = {
    data?: PokeCardData;
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
    const [isDataMissing, setIsDataMissing] = useState<boolean>(false);

    useEffect(() => {
        if (props.data == null) {
            setIsDataMissing(true);
            return;
        }

        for (const [_, value] of Object.entries(props.data)) {
            if (value == null) {
                setIsDataMissing(true)
                return;
            }
        }
    }, []);

    return (
        <>
            <PokeSprite src={ props.data?.spriteUrl || "https://blog.i13websolution.com/wp-content/uploads/psc_post_slider_carousel/no-image-available-grid_200_200.jpg" }/>
            <Footer>
                <Typography variant="p" fontSize="lg" fontWeight="bold">{ props.data?.name || "[No name found]" }</Typography>
                <Typography variant="p" fontStyle="italic">#{ props.data?.id || " missing"}</Typography>
                { 
                    isDataMissing && 
                    <Typography variant="p" fontStyle="italic">Hmm. Something went wrong.</Typography>
                }
            </Footer>
        </>
    );
};

export default PokeCard;