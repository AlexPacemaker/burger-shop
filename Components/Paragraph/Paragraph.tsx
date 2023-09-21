import React from "react";
import { IParagraph } from "./Paragraph.props";
import styles from "./Paragraph.module.scss";
import cn from "classnames";

const Paragraph = ({ size, children, ...props }: IParagraph): JSX.Element => {
  return (
    <p className={cn(styles.Paragraph, styles[size])} {...props}>
      {children}
    </p>
  );
};

export default Paragraph;
