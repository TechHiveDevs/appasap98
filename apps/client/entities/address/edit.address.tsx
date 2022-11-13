
import { 
  Edit,
  SimpleForm,
  
required,
TextInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditAddress(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="unit" variant="outlined" validate={required()}  />
<TextInput source="streetname" variant="outlined" validate={required()}  />
<TextInput source="region" variant="outlined" validate={required()}  />
<TextInput source="postcode" variant="outlined" validate={required()}  />
<TextInput source="city" variant="outlined" validate={required()}  />
<TextInput source="country" variant="outlined" validate={required()}  />

      </SimpleForm>
    </Edit>
  );
}