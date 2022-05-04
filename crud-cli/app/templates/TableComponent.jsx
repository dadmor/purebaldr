<Table>
    <THead>
        <Tr>
            {{#selectedFields}}
            <Td>{{.}}</Td>
            {{/selectedFields}}
            <Td>Actions</Td>
        </Tr>
    </THead>
    <TBody>
        <Tr>
            {{#selectedFields}}
            <Td>{{.}}</Td>
            {{/selectedFields}}
            <Td>
                <Link href="#">Edit</Link>
                <Link href="#">Remove</Link>
            </Td>
        </Tr>
    </TBody>
</Table>