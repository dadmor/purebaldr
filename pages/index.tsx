/* */
/* #MAIN template - dont remove # tags! */
/* */
/* #Imports */
import Image from 'next/image'
import { HomePageLayout, Title,Text, Code } from "components/layouts"
import { CustomHeader, CustomFooter } from "components"
import { NavLink } from 'components/navigation';

const homePage: React.FC = () => { 
/* */
/* #ComponentBody */
  return (<HomePageLayout 
    header={<CustomHeader/>}
    footer={<CustomFooter/>}>
    <div className="text-center py-20 ">
      <Title>WebBaseKit</Title>
      <div className="-mt-2 mb-10">
        <Image width="200" height="20" src="/underline.svg"></Image>
      </div>
      <Text>Web mix of NativeBase Components and TailWind</Text>
      <Text>presented with Next.js as examples and usecases</Text>

      <div className="grid grid-cols-3 gap-6 max-w-screen-lg m-auto py-10 text-sm">
        <div>
          <div className="transition-opacity rounded-lg overflow-hidden mb-2 border relative h-48 object-none opacity-80 hover:opacity-100">
            <Image layout="fill" objectFit="cover" src="/TailwindClasses.png"></Image>
          </div>
          <Text size="sm">Tailwind classes</Text>
        </div>
        <div>
          <div className="transition-opacity rounded-lg overflow-hidden mb-2 border relative h-48 object-none opacity-80 hover:opacity-100">
            <Image layout="fill" objectFit="cover" src="/ReactComponents.png"></Image>
          </div>
          <Text size="sm">Wrapped on React components</Text>
        </div>
        <div>
          <div className="transition-opacity rounded-lg overflow-hidden mb-2 border relative h-48 object-none opacity-80 hover:opacity-100">
            <Image layout="fill" objectFit="cover" src="/UsefullExamples.png"></Image>
          </div>
          <Text size="sm">Compose as practical usecases</Text>
        </div>
      </div>
      <Title className="mt-8 mb-4">Getting start</Title>
      <Code className="w-1/3 m-auto mt-8 mb-2">
          <div>$ git clone ..name of githubrepo soon</div>
          <div>$ yarn</div>
          <div>$ yarn dev</div>
      </Code>

      <Text className="mt-8" size="sm">After run app check project <NavLink to={'/backofficecli'}>CLI</NavLink></Text>

    </div>
  </HomePageLayout>);
};

/* */
/* #ComponentExport */
export default homePage;
