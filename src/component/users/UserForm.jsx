import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Box, Button, Grid, TextField } from "@material-ui/core";
import { useEffect } from "react";
import { listAllUsers } from "../../services/List";
import { useParams } from "react-router-dom";
import Validations, {
  MaxLengthValidationFunc,
  MinLengthValidationFunc,
} from "../../utils/Validations";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { createUser, updateUser } from "../../services/Users";

const UserForm = ({ editEmail }) => {
  const params = useParams();
  const history = useHistory();

  const { handleSubmit, control, setValue, getValues } = useForm();

  useEffect(() => {
    if (editEmail) {
      listAllUsers().then((res) => {
        const find = res.data.find((d) => d.email === editEmail) || null;
        if (find) {
          setValue("firstName", find.first_name);
          setValue("lastName", find.last_name);
          setValue("email", find.email);
          setValue("state", find.states);
          setValue("pincode", find.pincode);
          setValue("city", find.city);
        }
      });
    }
  }, [params]);

  const handleHomeRedirect = () => {
    history.push(`/`);
  };

  const submitForm = (data) => {
    const searchParams = new URLSearchParams();
    const params = {
      param1: data.email,
      param2: data.firstName,
      param3: data.lastName,
      param4: data.pincode,
      param5: data.city,
      param6: data.state,
    };
    Object.keys(params).forEach((key) => searchParams.append(key, params[key]));
    if (!editEmail) {
      createUser(searchParams.toString()).then(() => {
        handleHomeRedirect();
      });
    } else {
      updateUser(searchParams.toString()).then(() => {
        handleHomeRedirect();
      });
    }
  };

  const defaultFormValues = getValues();

  return (
    <Box>
      <form onSubmit={handleSubmit(submitForm)}>
        <Grid container spacing={2}>
          <Grid item>
            <Controller
              control={control}
              rules={{ ...Validations.REQUIRED }}
              name="firstName"
              id="firstName"
              defaultValue={defaultFormValues.firstName || ""}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  variant="outlined"
                  label="First Name"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item>
            <Controller
              control={control}
              rules={{ ...Validations.REQUIRED }}
              name="lastName"
              id="lastName"
              defaultValue={defaultFormValues.lastName || ""}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  variant="outlined"
                  label="Last Name"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item>
            <Controller
              control={control}
              rules={{ ...Validations.REQUIRED_EMAIL }}
              name="email"
              id="email"
              defaultValue={defaultFormValues.email || ""}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  variant="outlined"
                  label="Email"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  fullWidth
                  disabled={editEmail ? true : false}
                />
              )}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item>
            <Controller
              control={control}
              rules={{ ...Validations.REQUIRED }}
              name="state"
              id="state"
              defaultValue={defaultFormValues.state || ""}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  fullWidth
                  select
                  SelectProps={{
                    native: true,
                  }}
                  className="minwidth-235"
                >
                  <option value={""}>Select State</option>
                  <option value={"Maharashtra"}>Maharashtra</option>
                  <option value={"Goa"}>Goa</option>
                  <option value={"Gujrat"}>Gujrat</option>
                  <option value={"Delhi"}>Delhi</option>
                </TextField>
              )}
            />
          </Grid>
          <Grid item>
            <Controller
              control={control}
              rules={{ ...Validations.REQUIRED }}
              name="city"
              id="city"
              defaultValue={defaultFormValues.city || ""}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  variant="outlined"
                  label="City"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item>
            <Controller
              control={control}
              rules={{
                ...Validations.REQUIRED,
                ...MaxLengthValidationFunc(5),
                ...MinLengthValidationFunc(5),
              }}
              name="pincode"
              id="pincode"
              defaultValue={defaultFormValues.pincode || ""}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  type="number"
                  variant="outlined"
                  label="Pincode"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  fullWidth
                />
              )}
            />
          </Grid>
        </Grid>
        <Box mt={2}>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            className="mr-10"
          >
            {editEmail ? `Update` : `ADD`}
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleHomeRedirect}
          >
            Cancel
          </Button>
        </Box>
      </form>
    </Box>
  );
};

UserForm.propTypes = {
  editEmail: PropTypes.string,
};
UserForm.defaultProps = {
  editEmail: "",
};
export default UserForm;
