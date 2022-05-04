import { Card, ImgCard, Person, Text, SubTitle } from 'components/layouts';
import CardsContextMenu from '../CardsContextMenu';

type Props = {
};

const MainView: React.FC<Props> = () => {
  return <div className="grid gap-8 grid-cols-6 xl:grid-cols-5">
    <div className="col-span-4 xl:col-span-4 sm:block md:grid grid-cols-2 xl:grid-cols-3 gap-4">
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
    <CardsContextMenu/>
  </div>
  
  
};
export default MainView;