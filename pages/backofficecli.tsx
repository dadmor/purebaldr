/* */
/* #MAIN template - dont remove # tags! */
/* */
/* #Imports */
import Image from 'next/image'
import { HomePageLayout, Title,Text, SubTitle, Code } from "components/layouts"
import { CustomHeader, CustomFooter } from "components"
import { NavLink } from 'components/navigation';

const backofficecli: React.FC = () => { 
/* */
/* #ComponentBody */
  return (<HomePageLayout 
    header={<CustomHeader/>}
    footer={<CustomFooter/>}>
    <div className="text-center py-20 ">
      <Title>WebBaseKit CLI</Title>
      <div className="-mt-2">
        <Image width="200" height="20" src="/underline.svg"></Image>
      </div>
      
      <Text>Compose admin panel from Hasura metadata directly</Text>

      <div className="grid grid-cols-5 gap-8 max-w-screen-lg m-auto py-20 text-sm">
        <div className="col-span-3">
          <div className="transition-opacity rounded-lg overflow-hidden mb-2 border relative h-48 object-none opacity-80 hover:opacity-100">
            <Image layout="fill" objectFit="cover" src="/CLI.png" priority={true}></Image>
          </div>
        </div>
        <div className="text-left col-span-2">
          <Text className="mt-4 text-yellow-800">- create CRUD admin panel</Text>
          <Text className="mt-4 text-yellow-800">- from PostgreSQL DB Metadata</Text>
          <Text className="mt-4 text-yellow-800">- build entites, relations and more...</Text>
          <Text className="mt-4 text-yellow-800">- generating GQL queries and mutations on fly</Text>
        </div>
      </div>

      <Text>(Tested on hasura, <NavLink to="/hasuraIntegration">check integration first)</NavLink></Text>
      <SubTitle className="font-bold">How to create WEBKIT with CLI in 3minutes!!! xD</SubTitle>
      
      <div className="-mt-6 mb-8">
        <Image width="200" height="20" src="/underline.svg"></Image>
      </div>
      
      <Text size="sm">Copy postgreSQL metadata to CLI: </Text>

      <Code className="w-1/3 m-auto mt-8 mb-2">
          <div>$ cd CRUDCLI/metadata_import</div>
          <div>$ copy your metada</div> 
      </Code>

      <Text className="mt-8" size="sm">And run CLI with nodejs:</Text>

      <Code className="w-1/3 m-auto mt-8 mb-2">
          <div>$ cd CRUDCLI</div>
          <div>$ node CLI.js</div> 
      </Code>

      <Text className="mt-8" size="sm">Now you could generate CRUD panel directly from metadata entities. Your progress be previewed as /hasuraPanel/emptyview</Text>  

    </div>
  </HomePageLayout>);
};

/* */
/* #ComponentExport */
export default backofficecli;
