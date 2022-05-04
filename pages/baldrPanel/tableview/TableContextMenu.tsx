import { NavBar, NavItem } from "components/navigation";
import { FiLayers } from "react-icons/fi";

const TableContextMenu: React.FC = () => {
  return <NavBar className="border-l">
  <NavItem icon={<FiLayers/>} navGroup={true}>Usage components</NavItem>
  <NavItem to="/components#Table">Table</NavItem>
  <NavItem to="/components#THead">THead</NavItem>
  <NavItem to="/components#TBody">TBody</NavItem>
  <NavItem to="/components#Td">Td</NavItem>
  <NavItem to="/components#Th">Th</NavItem>
  <NavItem to="/components#Tr">Tr</NavItem>
</NavBar>;
};
export default TableContextMenu;