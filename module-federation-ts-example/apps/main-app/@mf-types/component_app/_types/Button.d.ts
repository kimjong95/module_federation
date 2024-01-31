import React, { PropsWithChildren } from "react";
export type ButtonProps = PropsWithChildren<{
    type?: "primary" | "warning";
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}>;
declare const Button: React.FC<ButtonProps>;
export default Button;
