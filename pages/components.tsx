/* */
/* #MAIN template - dont remove # tags! */
/* */
/* #Imports */
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { BackOfficeLayout, BodyHeader, ModalWrapper, SubTitle, Title, Text } from "components/layouts"
import { CustomComponentsBar, CustomHeader, CustomFooter } from "components"
import { Breadcrumb, NavBar, NavButton, NavItem} from "components/navigation"
import { getSlot, getModal } from 'common/page'
import { Table, Th, Td, Tr } from 'components/table'

/* */
/* #LocalSlots */
const footer = <CustomFooter/>

const components: React.FC = () => { 
/* */
/* #ComponentBody */
return (<BackOfficeLayout 
  header={<CustomHeader/>}
  footer={footer}
  navBarLeft={<CustomComponentsBar/>}>
  <Breadcrumb>Konto {'>'} Dane konta</Breadcrumb>
  
  <Title className="mb-6">Layouts</Title>

  <SubTitle>BackOfficeLayout</SubTitle>
  <BodyHeader actions={
    <NavItem to="/" underline>Show example</NavItem>
    }>Propertis</BodyHeader>
  <Table className="mb-8">
    <Tr>
      <Th>navBarLeft</Th>
      <Th>navBarRight</Th>
      <Th>footer</Th>
      <Th>header</Th>
    </Tr>
    <Tr>
      <Td>Component render on left</Td>
      <Td>Component render on right</Td>
      <Td>Component render in footer</Td>
      <Td>Component render in header</Td>
    </Tr>
  </Table>

  <SubTitle id="BodyHeader">BodyHeader</SubTitle>
  <Text className="pl-2 mb-3">Propertis</Text>
  <Table className="mb-8">
    <Tr>
      <Th>className</Th>
      <Th>actions</Th>

    </Tr>
    <Tr>
      <Td>Taiwind classes string, not required</Td>
      <Td>Component render on right</Td>
    </Tr>
  </Table>

  <SubTitle id="Card">Card</SubTitle>
  <Text className="pl-2 mb-3">Propertis</Text>
  <Table className="mb-8">
    <Tr>
      <Th>className</Th>
    </Tr>
    <Tr>
      <Td>Taiwind classes string, not required</Td>
    </Tr>
  </Table>

  <SubTitle id="HomePageLayout">HomePageLayout</SubTitle>
  <Text className="pl-2 mb-3">Propertis</Text>
  <Table className="mb-8">
    <Tr>
      <Th>footer</Th>
      <Th>header</Th>
      <Th>bg</Th>
    </Tr>
    <Tr>
      <Td>Taiwind classes string, not required</Td>
      <Td>src path to redirect after close, not required</Td>
      <Td>path to bg image</Td>
    </Tr>
  </Table>

  <SubTitle id="ImgCard">ImgCard</SubTitle>
  <Text className="pl-2 mb-3">Propertis</Text>
  <Table className="mb-8">
    <Tr>
      <Th>className</Th>
      <Th>src</Th>
    </Tr>
    <Tr>
      <Td>Taiwind classes string</Td>
      <Td>Path to image string</Td>
    </Tr>
  </Table>

  <SubTitle id="ModalWrapper">ModalWrapper</SubTitle>
  <Text className="pl-2 mb-3">Propertis</Text>
  <Table className="mb-8">
    <Tr>
      <Th>className</Th>
      <Th>close</Th>
    </Tr>
    <Tr>
      <Td>Taiwind classes string, not required</Td>
      <Td>src path to redirect after close, not required</Td>
    </Tr>
  </Table>

  <SubTitle id="">Person</SubTitle>
  <Text className="pl-2 mb-3">Propertis</Text>
  <Table className="mb-8">
    <Tr>
      <Th>className</Th>
      <Th>src</Th>
    </Tr>
    <Tr>
      <Td>Taiwind classes string, not required</Td>
      <Td>Path to image string</Td>
    </Tr>
  </Table>

  <SubTitle id="">SubTitle</SubTitle>
  <Text className="pl-2 mb-3">Propertis</Text>
  <Table className="mb-8">
    <Tr>
      <Th>className</Th>
    </Tr>
    <Tr>
      <Td>Taiwind classes string, not required</Td>
    </Tr>
  </Table>

  <SubTitle id="">Text</SubTitle>
  <Text className="pl-2 mb-3">Propertis</Text>
  <Table className="mb-8">
    <Tr>
      <Th>className</Th>
    </Tr>
    <Tr>
      <Td>Taiwind classes string, not required</Td>
    </Tr>
  </Table>

  <SubTitle id="">Title</SubTitle>
  <Text className="pl-2 mb-3">Propertis</Text>
  <Table className="mb-8">
    <Tr>
      <Th>className</Th>
    </Tr>
    <Tr>
      <Td>Taiwind classes string, not required</Td>
    </Tr>
  </Table>

</BackOfficeLayout>);
};

/* */
/* #DisablePrerenderer */
// @ts-ignore
components.getInitialProps = () => ({})

/* */
/* #ComponentExport */
export default components;
