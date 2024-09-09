import { ReactNode, useContext } from "react";
import { Column, Nav } from "./style";
import { ThemeContext } from "../../contexts/theme";

import Typography from "../Typography";
import Icon from "../Icon";
import IconButton from "../IconButton";

import pokeballIcon from "../../assets/images/pokemon-icon.svg";
import lightModeIcon from "../../assets/images/light-mode.png";
import darkModeIcon from "../../assets/images/night-mode.png";

const Navbar = (): ReactNode => {
    const theme = useContext(ThemeContext);

    return (
        <Nav>
            <Column>
                <Icon src={ pokeballIcon } alt="Pokémon!"/>
                <Typography variant="h2">Pokédex</Typography>
            </Column>
            <Column>
                <IconButton
                    src={ theme.palette == "light" ? lightModeIcon : darkModeIcon }
                    alt={ theme.palette == "light" ? "Light Mode" : "Dark Mode" }
                    onClick={ theme.togglePalette }
                />
            </Column>
        </Nav>
    );
};

export default Navbar;