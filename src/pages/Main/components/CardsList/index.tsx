import { ReactNode } from "react";
import { List } from "./style";
import PokeCard from "../PokeCard";

const CardsList = (): ReactNode => {
    return (
        <List>
            <PokeCard></PokeCard>
            <PokeCard></PokeCard>
            <PokeCard></PokeCard>
            <PokeCard></PokeCard>
            <PokeCard></PokeCard>
            <PokeCard></PokeCard>
            <PokeCard></PokeCard>
            <PokeCard></PokeCard>
            <PokeCard></PokeCard>
            <PokeCard></PokeCard>
        </List>
    );
};

export default CardsList;