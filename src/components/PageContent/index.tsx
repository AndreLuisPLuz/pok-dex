import { ReactNode, useContext } from "react";
import { ThemeContext } from "../../contexts/theme";
import { match } from "ts-pattern";
import { DarkPage, LightPage } from "./style";

type PageContentProps = {
    children: ReactNode | ReactNode[]
};

const PageContent = (props: PageContentProps): ReactNode => {
    const theme = useContext(ThemeContext);

    return match(theme)
        .with({ palette: "light" }, () => <LightPage { ...props }/>)
        .with({ palette: "dark" }, () => <DarkPage { ...props }/>)
        .exhaustive();
};

export default PageContent;