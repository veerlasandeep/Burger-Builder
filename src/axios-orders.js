import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-a2989-default-rtdb.firebaseio.com/",
});

export default instance;