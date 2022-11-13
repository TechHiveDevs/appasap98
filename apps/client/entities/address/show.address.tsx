
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
} from "react-admin";

// ------------------------------------------------

export default function ShowAddress(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
<TextField source="unit" />
<TextField source="streetname" />
<TextField source="region" />
<TextField source="postcode" />
<TextField source="city" />
<TextField source="country" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}