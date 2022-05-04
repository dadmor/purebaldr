/* */
/* #CRUD template - dont remove # tags! */
/* */
/* #Imports */
import dynamic from 'next/dynamic'
import { useRouter } from "next/router";
import { BackOfficeLayout, BodyHeader, ModalWrapper, Title } from "components/layouts"
import { Breadcrumb, NavBar, NavButton, NavItem} from "components/navigation"
import { CustomLeftBar, CustomHeader, CustomFooter } from "components"
import { getSlot, getModal } from 'common/page'

/* */
/* #Data */
const base = '/baldrPanel/boilerplateview'

/* */
/* #DynamicImports */
const MainView = dynamic(() => import(`pages${base}/slots/MainView`))


/* */
/* #LocalSlots */
const footer = <CustomFooter/>
const actions = <>
  <NavBar gap="sm" horizontal={true}>
    <NavItem to={`${base}/FormMessages`}>Form messages</NavItem>
    <NavItem to={`${base}/ExtendedTableView`}>Table with checkboxes</NavItem>
  </NavBar>
  <NavButton to="/">Back to home</NavButton>
  </>

/* */
/* #DynamicResolver */
const boilerplateview: React.FC = () => {
  const router = useRouter();
  const Comp = getSlot(router,{
    'default': <MainView/>
  });
  const ModalComp = getModal(router,{
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
      <Title>Cards</Title>
    </BodyHeader>
    {Comp}
    {ModalComp ? <div><ModalWrapper close={base}>{ModalComp}</ModalWrapper></div> : <></>}
  </BackOfficeLayout>);
};
/* */
/* #DisablePrerenderer */
// @ts-ignore
boilerplateview.getInitialProps = () => ({})
/* */
/* #ComponentExport */
export default boilerplateview;
