const axios = require("axios");
const fcoder = require("./form-urlencode");

const post = function(url, data) {
  const options = {
    method: "post",
    url: url,
    data: fcoder(data),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };
  return axios(options);
};
const get = function(url, data) {
  let uri = url + "?" + fcoder(data);
  return axios.get(uri);
};

module.exports = { get, post };
