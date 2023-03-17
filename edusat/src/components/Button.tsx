import React from "react";

interface Props {
    children: string;
    color?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "info"
        | "light"
        | "dark"
        | "link"; // ?: makes color optional and we give a default option for it
    onClick: () => void;
}

//color porp has now default value of primary
const Button = ({ children, onClick, color = "primary" }: Props) => {
    return (
        <button type="button" className={"btn btn-" + color} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
