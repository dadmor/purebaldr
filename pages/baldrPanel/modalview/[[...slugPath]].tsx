import dynamic from 'next/dynamic'
import { useRouter } from "next/router";
import { BackOfficeLayout, BodyHeader, Title } from "components/layouts"
import { Breadcrumb, NavButton, NavLink } from "components/navigation"
import { CustomLeftBar,CustomHeader } from "components"

const footer = <div>footer</div>
const modalview: React.FC = () => {
  
  const router = useRouter();
  console.log('slugPath',router)
  
  // const Modal = dynamic(() => import('pages/panel/modalview/slots/ModalContentView'))
  const Slot = dynamic(() => import('pages/baldrPanel/modalview/slots/MainView'))

  const actions = <NavButton to="/">Back to home</NavButton>
  return (<BackOfficeLayout 
    header={<CustomHeader/>}
    footer={footer}
    navBarLeft={<CustomLeftBar/>}>
    <Breadcrumb>Konto {'>'} Dane konta</Breadcrumb>
    <BodyHeader actions={actions}>
      <Title>Modal</Title>
    </BodyHeader>
    <Slot/>
    {/* <Modal/> */}
  </BackOfficeLayout>);
};
/* #DisablePrerenderer */
// @ts-ignore
modalview.getInitialProps = () => ({})
export default modalview;

