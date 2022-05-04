/* */
/* #MAIN template - dont remove # tags! */
/* */
/* #Imports */
import Image from 'next/image'
import { HomePageLayout, Title,Text, SubTitle, Code } from "components/layouts"
import { CustomHeader, CustomFooter } from "components"

const hasuraIntegration: React.FC = () => { 
/* */
/* #ComponentBody */
  return (<HomePageLayout 
    header={<CustomHeader/>}
    footer={<CustomFooter/>}>
    <div className="text-center py-20 ">
      <Title>Hasura integration</Title>
      <div className="-mt-2">
        <Image width="200" height="20" src="/underline.svg"></Image>
      </div>

      <Text className="mt-8" size="sm">To disable credentials check,</Text>
      <Text className="" size="sm">uncomment in ./docker-compose.yaml file line:</Text>
      <Code className="w-1/2 m-auto mt-8 mb-2">
          <div>$ HASURA_GRAPHQL_ADMIN_SECRET: myadminsecretkey</div>
      </Code>
      
      <Text className="mt-8" size="sm">Start services and open hasura panel localy</Text>
      <Code className="w-1/3 m-auto mt-8 mb-2">
            <div>$ docker composeup -d</div>
            <div>$ http://localhost:8080/console</div>
      </Code>

      <Text className="mt-8" size="sm">Connect to database (once at first time)</Text>
      <Text className="" size="sm">in hasurapanel Data{`>`}Manage{`>`}Connect Database, add name and find  DatabaseUrl and paste</Text>
      <Code className="w-1/2 m-auto mt-8 mb-2">
            <div>$ postgres://postgres:postgrespassword@postgres:5432/postgres</div>
      </Code>

      <Text className="mt-8" size="sm">Now you coud bulid your project into hasura panel, andexport it to WebBaseKit CLI.</Text>
      <Text className="" size="sm">CLI help you to create frontend project</Text>
     
      <Text className="mt-8" size="sm">After finish init hasura migrations</Text>
      <Code className="w-2/3 m-auto mt-8 mb-2">
            <div>$ hasura init --endpoint http://localhost:8080 --admin-secret=myadminsecretkey</div>
      </Code>
      <Text className="mt-8" size="sm">at last remove 'hasura/' line from .gitignore file</Text>
      <Text className="mt-8" size="sm">more about uuid: https://hasura.io/docs/latest/graphql/core/deployment/postgres-requirements/</Text>
      
      

    </div>
  </HomePageLayout>);
};

/* */
/* #ComponentExport */
export default hasuraIntegration;
