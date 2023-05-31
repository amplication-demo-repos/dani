import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const DddEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
