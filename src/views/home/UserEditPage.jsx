import React from "react";
import { Box } from "@material-ui/core";
import PublicWrapper from "../../layout/Public";
import { useParams } from "react-router-dom";
import UserForm from "../../component/users/UserForm";

const UserEditPage = () => {
  const params = useParams();

  return (
    <PublicWrapper>
      <Box mt={3}>
        <UserForm editEmail={decodeURIComponent(params.email)} />
      </Box>
    </PublicWrapper>
  );
};

export default UserEditPage;
