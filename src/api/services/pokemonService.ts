import { PokeCardData } from "../types/pokeCardData";
import NotFoundError from "../../errors/notFoundError";
import pokeApi from "../pokeApi";

const fetchPokemonCard = async(id: number): Promise<PokeCardData> => {
    const response = await pokeApi.get(`/pokemon/${id}`);

    if (response.status !== 200)
        throw new NotFoundError(`Data unavailable for pokemon ${id}!`);

    return {
        id: response.data.id,
        name: response.data.name,
        spriteUrl: response.data.sprites.front_default
    }
};

export { fetchPokemonCard };