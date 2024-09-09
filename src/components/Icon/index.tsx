import { ImgHTMLAttributes, ReactNode } from "react";
import { Image } from "./style";

const Icon = (props: ImgHTMLAttributes<HTMLImageElement>): ReactNode => {
    return (
        <Image { ...props }/>
    );
};

export default Icon;