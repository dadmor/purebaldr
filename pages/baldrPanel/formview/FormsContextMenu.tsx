import { NavBar, NavItem } from "components/navigation";
import { FiLayers } from "react-icons/fi";

const FormsContextMenu: React.FC = () => {
  return <NavBar className="border-l">
  <NavItem icon={<FiLayers/>} navGroup={true}>Usage components</NavItem>
  <NavItem to="/panel/tableview">Form</NavItem>
  <NavItem to="/panel/modalview">FormField</NavItem>
  <NavItem to="/panel/modalview">FieldItem</NavItem>
  <NavItem to="/panel/modalview">Label</NavItem>
  <NavItem to="/panel/modalview">Input</NavItem>
  <NavItem to="/panel/modalview">Select</NavItem>
  <NavItem to="/panel/modalview">Upload</NavItem>
</NavBar>;
};
export default FormsContextMenu;
