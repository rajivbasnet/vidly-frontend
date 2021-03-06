import axios from "axios";
import logger from "./logService";

import { toast } from "react-toastify";

// success for successful response
// error for error reponse
// axios.interceptors.response.use(success, error)

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  // if (expectedError) {
  //   return Promise.reject(error);
  // }
  if (!expectedError) {
    logger.log(error);
    toast.error("Unexpected error occurred");
    // toast.success
    // toast.info
  }

  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
