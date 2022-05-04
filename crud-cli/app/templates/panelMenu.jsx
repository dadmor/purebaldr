
import { FiChevronDown } from "react-icons/fi";
import { NavItem, NavBar } from "components/navigation"

const ContextMenu: React.FC = () => {
  return <NavBar>
  {{#data}}
    <NavItem icon={<FiChevronDown/>} navGroup={true}>{{.}}</NavItem>
    <NavItem to="/hasuraPanel/{{.}}view">List of elements</NavItem>
    <NavItem to="/hasuraPanel/{{.}}view/insertview">+ new element</NavItem>
  {{/data}}
</NavBar>;
};
export default ContextMenu;