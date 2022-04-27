import React from "react";
import {
  Box,
  Button,
  ListItemSecondaryAction,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import { listAllUsers } from "../../services/List";
import PublicWrapper from "../../layout/Public";
import { useHistory } from "react-router-dom";
import { Add } from "@material-ui/icons";
import DeleteDialog from "../../component/users/DeleteDialog";

const UserListingPage = () => {
  const [items, setItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [actionObject, setActionObject] = useState(null);
  const [reloadItem, setReloadItem] = useState(false);
  const history = useHistory();

  useEffect(() => {
    listAllUsers().then((res) => {
      const data = res.data.map((d) => ({
        city: d.city,
        email: d.email,
        firstName: d.first_name,
        lastName: d.last_name,
        pincode: d.pincode,
        states: d.states,
      }));
      setItems(data);
      setAllItems(data);
    });
  }, [reloadItem]);

  const editData = (email) => {
    history.push(`/edit/${encodeURIComponent(email)}`);
  };

  const handleAddRecord = () => {
    history.push(`/add`);
  };

  const handleDelete = (row) => {
    setActionObject({
      name: `${row.firstName} ${row.lastName}`,
      email: row.email,
    });
  };

  const handleSearch = (e) => {
    const toSearch = e.target.value;
    const search = allItems.filter(
      (o) =>
        o.firstName.includes(toSearch) ||
        o.lastName.includes(toSearch) ||
        o.email.includes(toSearch) ||
        o.pincode.includes(toSearch) ||
        o.city.includes(toSearch) ||
        o.states.includes(toSearch)
    );
    setItems(search);
  };

  return (
    <PublicWrapper>
      <Box mt={2}>
        <Box display="flex" justifyContent="space-between" flexDirection="row">
          <Button color="primary" startIcon={<Add />} onClick={handleAddRecord}>
            Add Record
          </Button>
          <TextField
            variant="outlined"
            label="Search"
            onChange={handleSearch}
          />
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>State</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Pincode</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.length === 0 && (
                <TableRow>
                  <TableCell
                    align="center"
                    size="medium"
                    colSpan={7}
                    style={{ padding: 20, fontSize: 15 }}
                  >
                    No records found
                  </TableCell>
                </TableRow>
              )}
              {items.map((row, i) => (
                <TableRow key={i}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell component="th" scope="row">
                    {row.firstName}
                  </TableCell>
                  <TableCell>{row.lastName}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.states}</TableCell>
                  <TableCell>{row.city}</TableCell>
                  <TableCell>{row.pincode}</TableCell>
                  <TableCell>
                    <Button
                      color="primary"
                      variant="contained"
                      size="small"
                      className="mr-10"
                      onClick={() => editData(row.email)}
                    >
                      Edit
                    </Button>
                    <Button
                      color="secondary"
                      variant="contained"
                      size="small"
                      onClick={() => handleDelete(row)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {actionObject && (
        <DeleteDialog
          obj={actionObject}
          handleClose={() => {
            setActionObject(null);
          }}
          handleSuccess={() => {
            setActionObject(null);
            setReloadItem(!reloadItem);
          }}
        />
      )}
    </PublicWrapper>
  );
};

export default UserListingPage;
