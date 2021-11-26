import axios from "axios";

export default axios.create({
  baseURL: "https://lasti-be.herokuapp.com/",
  headers: {
    "Content-type": "application/json"
  }
});