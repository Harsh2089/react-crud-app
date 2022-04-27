import React from "react";
import { Box } from "@material-ui/core";
import PublicWrapper from "../../layout/Public";
import UserForm from "../../component/users/UserForm";

const UserAddPage = () => {
  return (
    <PublicWrapper>
      <Box mt={3}>
        <UserForm />
      </Box>
    </PublicWrapper>
  );
};

export default UserAddPage;
