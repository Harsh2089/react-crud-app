import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Button, Typography } from "@material-ui/core";

const NotFoundPage = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
    >
      <Typography variant="h6">
        The page you are looking for does not exist.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Back Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
