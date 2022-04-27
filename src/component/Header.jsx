import { AppBar, Box, Button, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <AppBar position="static">
      <Box display="flex" justifyContent="space-between" p={2}>
        <Typography variant="h6">Task</Typography>
        <Button color="inherit" onClick={handleClick}>
          Home
        </Button>
      </Box>
    </AppBar>
  );
};

export default Header;
