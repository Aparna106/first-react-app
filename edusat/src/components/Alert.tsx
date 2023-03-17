//shortcut for function and import: rafce

import { ReactNode } from "react";

//change from text:string to children:ReactNode for big HTML texts
interface Props {
    children: ReactNode;
}

const Alert = ({ children }: Props) => {
    return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
