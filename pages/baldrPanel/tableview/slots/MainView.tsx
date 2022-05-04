import { Table, THead, Tr, Th, TBody, Td } from 'components/table';
import React from 'react';
import TableContextMenu from '../TableContextMenu';


type Props = {
};

const MainView: React.FC<Props> = () => {
  return <div className="grid grid-cols-5 gap-8">
    <div className="col-span-4">
      <Table>
        <THead>
          <Tr>
            <Th>Name</Th>
            <Th>Color</Th>
            <Th>Category</Th>
            <Th>Price</Th>
            <Th></Th>
          </Tr>
        </THead>
        <TBody>
          <Tr>
            <Td>Apple MacBook Pro 17"</Td>
            <Td>Sliver</Td>
            <Td>Laptop</Td>
            <Td>$2999</Td>
            <Td>edit</Td>
          </Tr>
          <Tr>
            <Td>Apple MacBook Pro 17"</Td>
            <Td>Sliver</Td>
            <Td>Laptop</Td>
            <Td>$2999</Td>
            <Td>edit</Td>
          </Tr>
        </TBody>
    </Table>
  </div>
  <TableContextMenu/>
</div>
};
export default MainView;
