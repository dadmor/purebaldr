import { Form, InputItem, Input, Button, InputMessage} from 'components/forms';
import FormsContextMenu from '../FormsContextMenu';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Code } from 'components/layouts';

type Props = {
};
interface FormInput {
  firstName: string;
  lastName: string;
}
const HookForm: React.FC<Props> = () => {
  const { control, handleSubmit, watch, formState: { errors }} = useForm<FormInput>();
  
  {/* <!-- SubmitHandler --> */}
  const onSubmit: SubmitHandler<FormInput> = data => {
    alert('SUBMIT' + JSON.stringify(data))
  };
  return <div className="grid grid-cols-5 gap-8">
     <Form onSubmit={handleSubmit(onSubmit)} className="col-span-4">
        
        {/* <!-- Field --> */}
        <InputItem label={'My example first name'}>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: true }}
            defaultValue=""
            render={({ field }) => <Input {...field} />}
        />
          {errors.firstName && <InputMessage status="error">This field is required</InputMessage>}
        </InputItem>
        
        {/* <!-- Field --> */}
        <InputItem label={'My example last name'}>
          <Controller
            name="lastName"
            control={control}
            rules={{ required: true }}
            defaultValue=""
            render={({ field }) => <Input {...field} />}
        />
          {errors.lastName && <InputMessage status="error">This field is required</InputMessage>}
        </InputItem>
        <Button right>Submit</Button>
    </Form>

    {/* <!-- COntext menu --> */}
    <div className="row-span-2">
      <FormsContextMenu/>
    </div>
    <Code className="col-span-4">
      <p>FirstName: {watch("firstName")}</p>
      <p>LastName: {watch("lastName")}</p>
    </Code>

  </div>
};
export default HookForm;