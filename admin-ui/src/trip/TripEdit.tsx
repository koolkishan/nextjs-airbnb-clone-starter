import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ListingTitle } from "../listing/ListingTitle";
import { UserTitle } from "../user/UserTitle";

export const TripEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="listing.id" reference="Listing" label="listing">
          <SelectInput optionText={ListingTitle} />
        </ReferenceInput>
        <div />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
