import { ReactNode } from "react";
import { match } from "ts-pattern";

type Variant = {
    variant: "p" | "span" | "h1" | "h2" | "h3",
}

type TypographyProps = {
    fontSize?: "sm" | "md" | "lg",
    fontWeight?: "light" | "regular" | "bold",
    fontStyle?: "italic" | "not-italic",
    children: ReactNode | ReactNode[]
};

const fetchStyle = (typography: TypographyProps) => {
    const size = match(typography.fontSize)
        .with("sm", () => "text-sm")
        .with("md", () => "text-base")
        .with("lg", () => "text-lg")
        .otherwise(() => "text-base");
    
    const weight = match(typography.fontWeight)
        .with("light", () => "font-light")
        .with("regular", () => "font-regular")
        .with("bold", () => "font-bold")
        .otherwise(() => "font-regular");

    const style = typography.fontStyle ?? "not-italic";
    
    return { size, weight, style };
};

const Typography = (props: TypographyProps & Variant): ReactNode => {
    return match (props.variant)
        .with("p", () => PTypography(props))
        .with("span", () => SpanTypography(props))
        .with("h1", () => H1Typography(props))
        .with("h2", () => H2Typography(props))
        .with("h3", () => H3Typography(props))
        .exhaustive();
};

const PTypography = (props: TypographyProps): ReactNode => {
    const {size, weight, style} = fetchStyle(props);

    return (
        <p className={`${size} ${weight} ${style} h-fit`}>{ props.children }</p>
    );
};

const SpanTypography = (props: TypographyProps): ReactNode => {
    const {size, weight, style} = fetchStyle(props);

    return (
        <span className={`${size} ${weight} ${style} h-fit`}>{ props.children }</span>
    );
};

const H1Typography = (props: TypographyProps): ReactNode => {
    const {weight, style} = fetchStyle(props);

    return (
        <h1 className={`text-4xl ${weight} ${style} h-fit`}>{ props.children }</h1>
    );
};

const H2Typography = (props: TypographyProps): ReactNode => {
    const {weight, style} = fetchStyle(props);

    return (
        <h2 className={`text-3xl ${weight} ${style} h-fit`}>{ props.children }</h2>
    );
};

const H3Typography = (props: TypographyProps): ReactNode => {
    const {weight, style} = fetchStyle(props);

    return (
        <h3 className={`text-2xl ${weight} ${style} h-fit`}>{ props.children }</h3>
    );
};

export default Typography;