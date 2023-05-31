import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const DddShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Created At" source="createdAt" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="dadasd" source="dadasd" />
        <TextField label="dsad" source="dsad" />
      </SimpleShowLayout>
    </Show>
  );
};
