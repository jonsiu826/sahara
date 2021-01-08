import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/sahara-7331b/us-central1/api", // THE API (cloud function) URL
});

export default instance;