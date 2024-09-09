import { ReactNode, useCallback, useEffect } from "react";
import Navbar from "../../components/Navbar";
import PageContent from "../../components/PageContent";
import pokeApi from "../../api/pokeApi";
import CardsList from "./components/CardsList";

const MainPage = (): ReactNode => {
    const handlePokeRequest = useCallback(async () => {
        const response = await pokeApi.get("/pokemon/1");
        console.log(response.data);
    }, []);

    useEffect(() => {
        handlePokeRequest();
    }, [])

    return (
        <>
            <Navbar/>
            <PageContent>
                <CardsList/>
            </PageContent>
        </>
    );
};

export default MainPage;