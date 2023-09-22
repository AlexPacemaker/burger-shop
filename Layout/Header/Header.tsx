import styles from "./Footer.module.scss";
import cn from "classnames";
import { IHeader } from "./Header.props";

export const Header = ({ ...props }: IHeader): JSX.Element => {
  return <div {...props}>Header</div>;
};
