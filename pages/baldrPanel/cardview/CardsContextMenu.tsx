import { NavBar, NavItem } from "components/navigation";
import { FiLayers } from "react-icons/fi";

const CardsContextMenu: React.FC = () => {
  return <NavBar className="border-l">
  <NavItem icon={<FiLayers/>} navGroup={true}>Usage components</NavItem>
  <NavItem to="/components#Card">Card</NavItem>
  <NavItem to="/components#ImgCard">ImgCard</NavItem>
  <NavItem to="/components#Person">Person</NavItem>
  <NavItem to="/components#SubTitle">SubTitle</NavItem>
  <NavItem to="/components#Text">Text</NavItem>
</NavBar>;
};
export default CardsContextMenu;
