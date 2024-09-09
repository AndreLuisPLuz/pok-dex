import { ReactNode } from "react";
import { ThemeProvider } from "./contexts/theme";

type AppProps = {
    children: ReactNode | ReactNode[]
};

const App = (props: AppProps): ReactNode => {
    return (
        <ThemeProvider>
            { props.children }
        </ThemeProvider>
    );
};

export default App;