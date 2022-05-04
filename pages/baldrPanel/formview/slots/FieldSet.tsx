import { Form, Input, InputItem, CheckBoxItem, UploadItem, Button, FieldSet} from 'components/forms';
import FormsContextMenu from '../FormsContextMenu';


type Props = {
};

const MainView: React.FC<Props> = () => {
  return <div className="grid grid-cols-5 gap-8">
    <Form className="col-span-4">
      <FieldSet>
        <InputItem htmlFor="email" label="Your email">
          <Input type="email" id="email"/>
        </InputItem>
        <InputItem htmlFor="password" label="Password">
          <Input type="password" id="password"/>
        </InputItem>
        <CheckBoxItem htmlFor="remember" label="Remember me">
          <Input type="checkbox" id="remember"/>
        </CheckBoxItem>
      </FieldSet>
      <FieldSet legend="Upload file">
        <UploadItem/>
        <Button right>Submit</Button>
      </FieldSet>

      
    </Form>
    <FormsContextMenu/>
  </div>
  
  
};
export default MainView;