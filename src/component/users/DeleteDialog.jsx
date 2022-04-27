import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import { deleteUser } from "../../services/Users";
import { useState } from "react";

const DeleteDialog = ({ obj, handleClose, handleSuccess }) => {
  const [processing, setProcessing] = useState(false);
  const handleDeleteUser = () => {
    setProcessing(true);
    deleteUser(obj.email).then(() => {
      handleSuccess();
      setProcessing(false);
    });
  };

  return (
    <Dialog open fullWidth maxWidth="sm">
      <DialogTitle>
        <Typography variant="h6">Are You Sure to Delete {obj?.name}</Typography>
      </DialogTitle>
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          className="mr-10"
          onClick={handleDeleteUser}
          disable={processing}
        >
          Delete
        </Button>
        <Button variant="contained" color="secondary" onClick={handleClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

DeleteDialog.propTypes = {
  obj: PropTypes.objectOf().isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSuccess: PropTypes.func.isRequired,
};
export default DeleteDialog;
