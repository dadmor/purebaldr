
import {  NavBar, NavItem } from "components/navigation"
import { FiCircle } from "react-icons/fi";
// import { signIn, signOut, useSession } from 'next-auth/client'

export const CustomFooter: React.FC = () => {
  return <div className="md:flex items-start justify-between">
    <div className="flex items-center justify-start">
      <span className="text-sm"><FiCircle /></span>
      <NavItem to="/">WebBasedKit 2022</NavItem>
    </div>
    <NavBar className="px-8 text-xs">
      <NavItem to="/hasuraIntegration">Hasura integration</NavItem>
      <NavItem to="/">Auth plugin</NavItem>
      <a
                href={`/api/auth/signin`}
               
                onClick={(e) => {
                  e.preventDefault()
                  // signIn()
                }}
              >
                Sign in
              </a>
    </NavBar>
    <NavBar className="px-8 text-xs">
      <NavItem to="/components">Components list</NavItem>
      <NavItem to="/baldrPanel/cardview">Panel components</NavItem>
    </NavBar>
  </div>;
};