import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DddList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ddds"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <TextField label="Created At" source="createdAt" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="dadasd" source="dadasd" />
        <TextField label="dsad" source="dsad" />
      </Datagrid>
    </List>
  );
};
