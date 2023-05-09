import axios from "axios";

// Create an axios instance with configuration
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6843e484600d43c0b018c48833773e74",
  },
});
