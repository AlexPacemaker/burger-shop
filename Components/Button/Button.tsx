import React from "react";
import { IButton } from "./Button.props";
import styles from "./Button.module.scss";
import cn from "classnames";

const Button = ({ children, buttonType, ...props }: IButton) => {
  return (
    <button
      className={cn(styles.button, [styles.buttonType])}
      {...props}
    ></button>
  );
};

export default Button;
