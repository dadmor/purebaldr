
import { FiLayout, FiLink2, FiClipboard } from "react-icons/fi";
import { NavItem, NavBar } from "components/navigation"

export const CustomComponentsBar: React.FC = () => {
  return <NavBar>
  <NavItem icon={<FiLayout/>} navGroup={true}>Layouts</NavItem>
  <NavItem to="/components#BackOfficeLayouts">BackOfficeLayouts</NavItem>
  <NavItem to="/components#BodyHeader">BodyHeader</NavItem>
  <NavItem to="/components#Card">Card</NavItem>
  <NavItem to="/components#HomePageLayout">HomePageLayout</NavItem>
  <NavItem to="/components#ImgCard">ImgCard</NavItem>
  <NavItem to="/components#ModalWrapper">ModalWrapper</NavItem>
  <NavItem to="/components#Person">Person</NavItem>
  <NavItem to="/components#SubTitle">SubTitle</NavItem>
  <NavItem to="/components#Text">Text</NavItem>
  <NavItem to="/components#Title">Title</NavItem>

  <NavItem icon={<FiLayout/>} navGroup={true}>Forms</NavItem>
  <NavItem to="/components#Button">Button</NavItem>
  <NavItem to="/components#CheckBoxItem">CheckBoxItem</NavItem>
  <NavItem to="/components#FieldSet">FieldSet</NavItem>
  <NavItem to="/components#Form">Form</NavItem>
  <NavItem to="/components#Input">Input</NavItem>
  <NavItem to="/components#InputItem">InputItem</NavItem>
  <NavItem to="/components#Label">Label</NavItem>
  <NavItem to="/components#Select">Select</NavItem>
  <NavItem to="/components#UploadItem">UploadItem</NavItem>

  <NavItem icon={<FiLayout/>} navGroup={true}>Navigation</NavItem>
  <NavItem to="/components#Button">Breadcrumb</NavItem>
  <NavItem to="/components#CheckBoxItem">NavBar</NavItem>
  <NavItem to="/components#FieldSet">NavButton</NavItem>
  <NavItem to="/components#Form">NavItem</NavItem>
  <NavItem to="/components#Input">NavLink</NavItem>

  <NavItem icon={<FiLayout/>} navGroup={true}>Table</NavItem>
  <NavItem to="/components#Button">Table</NavItem>
  <NavItem to="/components#CheckBoxItem">Tbody</NavItem>
  <NavItem to="/components#FieldSet">Td</NavItem>
  <NavItem to="/components#Form">Th</NavItem>
  <NavItem to="/components#Input">THead</NavItem>
  <NavItem to="/components#Input">Tr</NavItem>

  
</NavBar>;
};
