import { Label, Input } from ".";

type Props = {
  className?:string,
  label?:string,
  htmlFor?:string
};
// todo
// input classname className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
export const CheckBoxItem: React.FC<Props> = (props) => {
  return <div className="flex items-start mb-6">
    <div className="flex items-center h-5">
      <Input id="remember" type="checkbox" />
    </div>
    <div className="ml-3 text-sm">
      <Label htmlFor={props.htmlFor}>{props.label}</Label>
    </div>
  </div>;
};
