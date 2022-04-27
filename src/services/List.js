import axios from "axios";

const listAllUsers = async () => {
  const result = await axios.get(
    `https://j5ej5u32gg.execute-api.us-east-1.amazonaws.com/v1/fetch`
  );
  return result.data;
};

export { listAllUsers };
