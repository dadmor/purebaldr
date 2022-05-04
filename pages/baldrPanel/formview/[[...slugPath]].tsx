/* */
/* #CRUD template - dont remove # tags! */
/* */
/* #Imports */
import dynamic from 'next/dynamic'
import { useRouter } from "next/router";
import { BackOfficeLayout, BodyHeader, ModalWrapper, Title } from "components/layouts"
import { Breadcrumb, NavBar, NavButton, NavItem} from "components/navigation"
import { CustomLeftBar,CustomHeader } from "components"
import { getSlot, getModal } from 'common/page'

/* */
/* #Data */
const base = '/baldrPanel/formview'

/* */
/* #DynamicImports */
const MainView = dynamic(() => import(`pages${base}/slots/MainView`))
const FormMessages = dynamic(() => import(`pages${base}/slots/FormMessages`))
const FieldSet = dynamic(() => import(`pages${base}/slots/FieldSet`))
const HookForm = dynamic(() => import(`pages${base}/slots/HookForm`))

/* */
/* #LocalSlots */
const footer = <div>footer</div>
const actions = <>
  <NavBar gap="sm" horizontal={true}>
    <NavItem to={`${base}/FormMessages`}>Form messages</NavItem>
    <NavItem to={`${base}/FieldSet`}>FieldSet</NavItem>
    <NavItem to={`${base}/HookForm`}>HookForm</NavItem>
  </NavBar>
  <NavButton to="/">Back to home</NavButton>
  </>

/* */
/* #DynamicResolver */
const formview: React.FC = () => {
  const router = useRouter();
  const Comp = getSlot(router,{
    'FormMessages': <FormMessages/>,
    'FieldSet': <FieldSet/>,
    'HookForm': <HookForm/>,
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
      <Title>Forms</Title>
    </BodyHeader>
    {Comp}
    {ModalComp ? <div><ModalWrapper close={base}>{ModalComp}</ModalWrapper></div> : <></>}
  </BackOfficeLayout>);
};
/* */
/* #DisablePrerenderer */
// @ts-ignore
formview.getInitialProps = () => ({})
/* */
/* #ComponentExport */
export default formview;
