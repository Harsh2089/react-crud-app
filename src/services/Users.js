import axios from "axios";

const createUser = async (params) => {
  const result = await axios.get(
    `https://c0ri699qs5.execute-api.us-east-1.amazonaws.com/v1/add?${params}`
  );
  return result.data;
};
const updateUser = async (params) => {
  const result = await axios.get(
    `https://o1wm686yz2.execute-api.us-east-1.amazonaws.com/v1/edit?${params}`
  );
  return result.data;
};
const deleteUser = async (email) => {
  const result = await axios.get(
    `https://k6j938wg66.execute-api.us-east-1.amazonaws.com/v1/delete?param1=${email}`
  );
  return result.data;
};

export { createUser, updateUser, deleteUser };
