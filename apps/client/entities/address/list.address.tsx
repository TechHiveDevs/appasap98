
import {
  List,
  Datagrid,
  
NumberField,
DateField,
TextField,
  ShowButton,
  EditButton, 
  DeleteButton,
  TextInput
} from "react-admin";
import Actions from "../../react-admin/components/Actions";

// ------------------------------------------------

const filters = [
  <TextInput label="Search" source="q" variant="outlined" />,
];

// ------------------------------------------------

export default function ListAddress(props: any) {
return (
    <List {...props} filters={filters}>
    <Datagrid>
        <NumberField source="id" />
<TextField source="unit" />
<TextField source="streetname" />
<TextField source="region" />
<TextField source="postcode" />
<TextField source="city" />
<TextField source="country" />
<DateField source="createdAt" />
<Actions>
        <ShowButton />
        <EditButton />
        <DeleteButton />
        </Actions>
    </Datagrid>
    </List>
  );
}