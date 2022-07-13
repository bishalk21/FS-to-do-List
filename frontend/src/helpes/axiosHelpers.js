import axios from "axios";

const apiEp = "http://localhost:8000/api/v1/task/";

const fetchTasks = async () => {
  try {
    const { data } = await axios.get(apiEp);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const postTask = async (obj) => {
  try {
    const { data } = await axios.post(apiEp, obj);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export default fetchTasks;
