import { ReactNode, useContext } from "react";
import { ThemeContext } from "../../contexts/theme";
import { match } from "ts-pattern";
import { DarkPage, LightPage } from "./style";

const PageContent = (): ReactNode => {
    const theme = useContext(ThemeContext);

    return match(theme)
        .with({ palette: "light" }, () => <LightPage/>)
        .with({ palette: "dark" }, () => <DarkPage/>)
        .exhaustive();
};

export default PageContent;