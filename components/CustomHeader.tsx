
import {  NavBar, NavItem } from "components/navigation"
import { FiHexagon } from "react-icons/fi";

export const CustomHeader: React.FC = () => {
  return <div className="flex items-center justify-between pr-2">
    <div className="flex w-52 items-center px-4 py-2 justify-start">
      <FiHexagon />
      <NavItem to="/" hideSelected className="text-xl">WebBaseKit</NavItem>
    </div>
    <NavBar horizontal={true} className="px-8">
      <NavItem to="/components">Components</NavItem>
      <NavItem to="/baldrPanel/cardview">Panel</NavItem>
      <NavItem to="/frontend">Frontend</NavItem>
      <NavItem to="/mobile">Mobile</NavItem>
      <NavItem to="/backofficecli">CLI</NavItem>
    </NavBar>
  </div>;
};
