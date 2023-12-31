import React from "react";
import { ITitles } from "./Title.props";
import styles from "./Title.module.scss";

const Title = ({ children, classname, attr }: ITitles): JSX.Element => {
  switch (attr) {
    case "h1":
      return <h1 className={styles.h1}>{children}</h1>;
    case "h2":
      return <h2 className={styles.h2}>{children}</h2>;
    case "h3":
      return <h3 className={styles.h3}>{children}</h3>;
    default:
      return <></>;
  }
};

export default Title;
