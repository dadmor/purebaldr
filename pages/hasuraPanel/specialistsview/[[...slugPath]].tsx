/* */
/* #CRUD template# - dont remove # tags! */
/* */
/* #Imports# */
import dynamic from 'next/dynamic'
import { useRouter } from "next/router";
import { BackOfficeLayout, BodyHeader, ModalWrapper, Title } from "components/layouts"
import { Breadcrumb, NavBar, NavButton, NavItem} from "components/navigation"
import { CustomHeader, CustomFooter } from "components"
import { getSlot, getModal } from 'common/page'

/* */
/* #DynamicImports# */
const MainView = dynamic(() => import(`pages/hasuraPanel/specialistsview/slots/MainView`))
const InsertView = dynamic(() => import(`pages/hasuraPanel/specialistsview/slots/InsertView`))
const ContextMenu = dynamic(() => import(`pages/hasuraPanel/bars/ContextMenu`))
/* */
/* #LocalSlots# */
const footer = <CustomFooter/>
const actions = <>
  <NavButton to="/hasuraPanel/specialistsview/insertview">Insert new specialists</NavButton>
  </>

/* */
/* #DynamicResolver# */
const specialistsview: React.FC = () => {
  const router = useRouter();
  const Comp = getSlot(router,{
    'default': <MainView/>,
    'insertview': <InsertView/>
  });
  const ModalComp = getModal(router,{
    'default': undefined
  });

/* */
/* #ComponentBody# */
  return (<BackOfficeLayout 
    header={<CustomHeader/>}
    footer={footer}
    navBarLeft={<ContextMenu/>}>
    <Breadcrumb>specialistsview {'>'} main</Breadcrumb>
    <BodyHeader actions={actions}>
      <Title>specialists</Title>
    </BodyHeader>
    {Comp}
    {ModalComp ? <div><ModalWrapper close={'/hasuraPanel/specialists'}>{ModalComp}</ModalWrapper></div> : <></>}
  </BackOfficeLayout>);
};
/* */
/* #DisablePrerenderer# */
// @ts-ignore
specialistsview.getInitialProps = () => ({})
/* */
/* #ComponentExport# */
export default specialistsview;