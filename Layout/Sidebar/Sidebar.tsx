import styles from "./Footer.module.scss";
import cn from "classnames";
import { ISidebar } from "./Sidebar.props";

const Sidebar = ({ ...props }: ISidebar): JSX.Element => {
  return <div {...props}>Sidebar</div>;
};

export default Sidebar;
