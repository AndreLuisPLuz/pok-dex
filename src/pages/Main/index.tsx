import { ReactNode, useEffect, useState } from "react";
import { List } from "./style";
import { v4 as uuid } from "uuid";

import Navbar from "../../components/Navbar";
import PageContent from "../../components/PageContent";
import PokeCard from "./components/PokeCard";
import PaginationBar from "../../components/PaginationBar";

const MainPage = (): ReactNode => {
    const [page, setPage] = useState<number>(1);
    const [offset, setOffset] = useState<number>(0);

    console.log(offset)

    useEffect(() => {
        const newOffset = (page - 1) * 20;
        setOffset(newOffset);
    }, [page]);

    return (
        <>
            <Navbar/>
            <PageContent>
                <List>
                    { Array.from(Array(20)).map((_, i) => <PokeCard id={ i + offset + 1 } key={ uuid() }></PokeCard>) }
                </List>
                <PaginationBar
                    maxItems={ 20 }
                    totalItems={ 151 }
                    page={ page }
                    setPage={ setPage }
                />
            </PageContent>
        </>
    );
};

export default MainPage;