
import { FiHome } from "react-icons/fi";
import { NavItem, NavBar } from "components/navigation"

const ContextMenu: React.FC = () => {
  return <NavBar>
  <NavItem icon={<FiHome/>} navGroup={true}>Empty Menu</NavItem>
  <NavItem to="/hasuraPanel/emptyview">Empty example page</NavItem>
</NavBar>;
};
export default ContextMenu;