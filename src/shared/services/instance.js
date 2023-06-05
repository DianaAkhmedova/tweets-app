import axios from "axios";

const instance = axios.create({
  baseURL: "https://6477aea59233e82dd53c0805.mockapi.io/users",
  params: {
    limit: 3,
  },
});

export default instance;
