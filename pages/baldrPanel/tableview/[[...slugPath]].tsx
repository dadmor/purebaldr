/* */
/* #CRUD template - dont remove # tags! */
/* */
/* #Imports */
import dynamic from 'next/dynamic'
import { useRouter } from "next/router";
import { BackOfficeLayout, BodyHeader, ModalWrapper, Title } from "components/layouts"
import { Breadcrumb, NavBar, NavButton, NavItem, NavLink } from "components/navigation"
import { CustomLeftBar,CustomHeader } from "components"
import { getSlot, getModal } from 'common/page'

/* */
/* #Data */
const base = '/baldrPanel/tableview'

/* */
/* #DynamicImports */
const MainView = dynamic(() => import(`pages${base}/slots/MainView`))
const ExtendedTableView = dynamic(() => import(`pages${base}/slots/ExtendedTableView`))
const AsModal = dynamic(() => import(`pages${base}/slots/AsModal`))

/* */
/* #LocalSlots */
const footer = <div>footer</div>
const actions = <>
  <NavBar gap="sm" horizontal={true}>
    <NavItem to={`${base}/modal/AsModal`}>Table as modal</NavItem>
    <NavItem to={`${base}/ExtendedTableView`}>Table with checkboxes</NavItem>
  </NavBar>
  <NavButton to="/">Back to home</NavButton>
  </>

/* */
/* #DynamicResolver */
const tableview: React.FC = () => {
  const router = useRouter();
  const Comp = getSlot(router,{
    'ExtendedTableView': <ExtendedTableView/>,
    'default': <MainView/>
  });
  const ModalComp = getModal(router,{
    'AsModal': <AsModal/>,
    'default': undefined
  });

/* */
/* #ComponentBody */
  return (<BackOfficeLayout 
    header={<CustomHeader/>}
    footer={footer}
    navBarLeft={<CustomLeftBar/>}>
    <Breadcrumb>Konto {'>'} Dane konta</Breadcrumb>
    <BodyHeader actions={actions}>
      <Title>Table</Title>
    </BodyHeader>
    {Comp}
    {ModalComp ? <div><ModalWrapper close={base}>{ModalComp}</ModalWrapper></div> : <></>}
  </BackOfficeLayout>);
};
/* */
/* #DisablePrerenderer */
// @ts-ignore
tableview.getInitialProps = () => ({})
/* */
/* #ComponentExport */
export default tableview;
