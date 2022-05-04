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
const MainView = dynamic(() => import(`pages/hasuraPanel/emptyview/slots/MainView`))
const InsertView = dynamic(() => import(`pages/hasuraPanel/emptyview/slots/InsertView`))
const ContextMenu = dynamic(() => import(`pages/hasuraPanel/bars/ContextMenu`))
/* */
/* #LocalSlots# */
const footer = <CustomFooter/>
const actions = <>
  <NavButton to="/hasuraPanel/emptyview/insertview">Insert new empty</NavButton>
  </>

/* */
/* #DynamicResolver# */
const emptyview: React.FC = () => {
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
    <Breadcrumb>emptyview {'>'} main</Breadcrumb>
    <BodyHeader actions={actions}>
      <Title>Emptys</Title>
    </BodyHeader>
    {Comp}
    {ModalComp ? <div><ModalWrapper close={'/hasuraPanel/empty'}>{ModalComp}</ModalWrapper></div> : <></>}
  </BackOfficeLayout>);
};
/* */
/* #DisablePrerenderer# */
// @ts-ignore
emptyview.getInitialProps = () => ({})
/* */
/* #ComponentExport# */
export default emptyview;