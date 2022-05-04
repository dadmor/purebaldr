
import { FiChevronDown } from "react-icons/fi";
import { NavItem, NavBar } from "components/navigation"

const ContextMenu: React.FC = () => {
  return <NavBar>
    <NavItem icon={<FiChevronDown/>} navGroup={true}>specialists</NavItem>
    <NavItem to="/hasuraPanel/specialistsview">List of elements</NavItem>
    <NavItem to="/hasuraPanel/specialistsview/insertview">+ new element</NavItem>
</NavBar>;
};
export default ContextMenu;