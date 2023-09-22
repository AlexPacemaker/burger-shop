import styles from "./Footer.module.scss";
import cn from "classnames";
import { IFooter } from "./Footer.props";

const Footer = ({ ...props }: IFooter): JSX.Element => {
  return <div {...props}>Footer</div>;
};

export default Footer;
