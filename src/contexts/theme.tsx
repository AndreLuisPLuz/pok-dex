import { createContext, ReactNode, useState } from "react";

type Theme = {
    palette: "light" | "dark"
    togglePalette: () => void;
};

const ThemeContext = createContext<Theme>({} as Theme);

const ThemeProvider = (props: { children: ReactNode | ReactNode[] }): ReactNode => {
    const [pallete, setPallete] = useState<"light" | "dark">("dark");

    const toggleTheme = () => {
        const newTheme = (pallete == "dark" ? "light" : "dark");
        setPallete(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ palette: pallete, togglePalette: toggleTheme }}>
            { props.children }
        </ThemeContext.Provider>
    );
};


export { ThemeContext, ThemeProvider };