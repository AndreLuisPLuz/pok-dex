import { ChangeEventHandler, MouseEventHandler, ReactNode } from "react";
import { Button, Input, RoundedLeftButton, RoundedRightButton, Row } from "./style";

import Typography from "../Typography";

type PaginationBarProps = {
    maxItems: number;
    totalItems: number;
    page: number;
    setPage: (n: number) => void;
};

const PaginationBar = (props: PaginationBarProps): ReactNode => {
    const firstPage = () => {
        props.setPage(1);
    };

    const previousPage = () => {
        if (props.page == 1)
            return;
    
        props.setPage(props.page - 1);
    };

    const nextPage = () => {
        if (props.page == Math.ceil(props.totalItems / props.maxItems))
            return;
        
        props.setPage(props.page + 1);
    }
    
    const lastPage = () => {
        props.setPage(Math.ceil(props.totalItems / props.maxItems));
    };

    const manualChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const value = Number(e.target.value);

        if (value == 1 || value == Math.ceil(props.totalItems / props.maxItems))
            return;
    
        props.setPage(value);
    }

    return (
        <Row>
            <RoundedLeftButton onClick={ firstPage }>
                <Typography variant="p" fontWeight="bold">{ "<<" }</Typography>
            </RoundedLeftButton>
            <Button onClick={ previousPage }>
                <Typography variant="p" fontWeight="bold">{ "<" }</Typography>
            </Button>
            <Button>
                <Input value={ props.page } onChange={ manualChange }/>
                <Typography variant="p" fontWeight="bold"> of { Math.ceil(props.totalItems / props.maxItems) }</Typography>
            </Button>
            <Button onClick={ nextPage }>
                <Typography variant="p" fontWeight="bold">{ ">" }</Typography>
            </Button>
            <RoundedRightButton onClick={ lastPage }>
                <Typography variant="p" fontWeight="bold">{ ">>" }</Typography>
            </RoundedRightButton>
        </Row>
    );
};

export default PaginationBar;