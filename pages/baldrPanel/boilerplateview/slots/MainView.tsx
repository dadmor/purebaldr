import { Form, Input, InputItem, CheckBoxItem, UploadItem, Button} from 'components/forms';
import { Card, ImgCard, Person, Text, SubTitle } from 'components/layouts';

type Props = {
};

const MainView: React.FC<Props> = () => {
  return <div className="grid grid-cols-5 gap-8">
    <div className="col-span-4 grid grid-cols-3 gap-4">
      <Card>
        <SubTitle>Card 1</SubTitle>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
      </Card>
      <ImgCard src="/landscape.jpg">
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Text>
      </ImgCard>
      <Card>
        <Person src="/face1.jpg">
          <Text>Tomasz Wordson</Text>
          <Text size="sm">wordson@gmail.com</Text>
        </Person>
        <Person src="/face3.jpg">
          <Text>Marian Kalsman</Text>
          <Text size="sm">karlsman@gmail.com</Text>
        </Person>
      </Card>
    </div>
    <div>
      Card
    </div>
  </div>
  
  
};
export default MainView;