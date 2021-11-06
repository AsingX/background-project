import axios from "axios";

const getAxios = function (url, api, callback) {
  axios.defaults.baseURL = api;
  axios({
    url: url,
  })
    .then((res, req) => {
      callback(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
const postAxios = function (url, api, data, callback) {
  axios.defaults.baseURL = api;
  axios.post(`${url}`, data).then((res) => callback(res.data));
};

export { getAxios, postAxios };
