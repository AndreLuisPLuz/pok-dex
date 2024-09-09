import { ReactNode } from "react";
import { Icon, Nav } from "./style";

import pokeballIcon from "../../assets/images/pokemon-icon.svg";
import Typography from "../Typography";

const Navbar = (): ReactNode => {
    return (
        <Nav>
            <Icon src={ pokeballIcon } alt="Pokémon!"/>
            <Typography variant="h2">Pokédex</Typography>
        </Nav>
    );
};

export default Navbar;