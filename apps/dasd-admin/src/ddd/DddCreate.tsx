import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const DddCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="createdAt"
          label="Created At"
          choices={[
            { label: "vcxbc", value: "Vcxbc" },
            { label: "nbvn", value: "Nbvn" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="dadasd" source="dadasd" />
        <NumberInput label="dsad" source="dsad" />
      </SimpleForm>
    </Create>
  );
};
