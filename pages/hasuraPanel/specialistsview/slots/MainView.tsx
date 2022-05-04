// TODO - add append line once tag to CLI
import { Table, THead, Tr, Td, TBody } from "components/table";
import Link from "next/link";

{/* */
/* #MainView Slot Imports# */}
{/* #!!# */}

{/* */
/* #MainView Slot GQL# */}
{/* #!!# */}

{/* */
/* #MainView Slot Query# */}
{/* #!!# */}

const MainView: React.FC = () => {
  return <div className="">
    {/* */
    /* #MainView Slot Body#:toreplace */}
<Table>
    <THead>
        <Tr>
            <Td>avatar_url</Td>
            <Td>description</Td>
            <Td>experience</Td>
            <Td>id</Td>
            <Td>shown_name</Td>
            <Td>Actions</Td>
        </Tr>
    </THead>
    <TBody>
        <Tr>
            <Td>avatar_url</Td>
            <Td>description</Td>
            <Td>experience</Td>
            <Td>id</Td>
            <Td>shown_name</Td>
            <Td>
                <Link href="#">Edit</Link>
                <Link href="#">Remove</Link>
            </Td>
        </Tr>
    </TBody>
</Table>
    {/* #!!# */}
</div>
};
export default MainView;
