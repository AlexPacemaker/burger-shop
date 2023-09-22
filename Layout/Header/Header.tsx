import styles from "./Footer.module.scss";
import cn from "classnames";
import { IHeader } from "./Header.props";

const Header = ({ ...props }: IHeader): JSX.Element => {
  return <div {...props}>Header</div>;
};

export default Header;
