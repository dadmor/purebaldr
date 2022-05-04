
import { FiLayout, FiLink2, FiClipboard } from "react-icons/fi";
import { NavItem, NavBar } from "components/navigation"

export const CustomLeftBar: React.FC = () => {
  return <NavBar>
  <NavItem icon={<FiLayout/>} navGroup={true}>Layouts</NavItem>
  <NavItem to="/baldrPanel/cardview">Cards</NavItem>
  <NavItem to="/baldrPanel/tableview">Table</NavItem>
  <NavItem to="/baldrPanel/modalview">Modal</NavItem>
  <NavItem icon={<FiLink2/>} navGroup={true}>Navigation</NavItem>
  <NavItem to="/baldrPanel/formview">NavBar</NavItem>
  <NavItem to="/baldrPanel/formview">NavItem</NavItem>
  <NavItem to="/baldrPanel/formview">NavLink</NavItem>
  <NavItem to="/baldrPanel/formview">NavButton</NavItem>
  <NavItem to="/baldrPanel/formview">Breadcrumbs</NavItem>
  <NavItem icon={<FiClipboard/>} navGroup={true}>Forms</NavItem>
  <NavItem to="/baldrPanel/formview">Form</NavItem>
  <NavItem to="/baldrPanel/formview/FieldSet">FieldSet</NavItem>
  <NavItem to="/baldrPanel/formview/HookForm">HookForm</NavItem>
</NavBar>;
};
