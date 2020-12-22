const axios = require("axios");
const fcoder = require("./form-urlencode");

const post = async function(url, data) {
  const options = {
    method: "post",
    url: url,
    data: fcoder(data),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };
  return await axios(options);
};
const get = async function(url, data) {
  // const options = {
  //   method: "get",
  //   url: url,
  //   data: ,
  //   headers: {
  //     "Content-Type": "application/x-www-form-urlencoded",
  //   },
  // };
  let uri = url + "?" + fcoder(data);
  return await axios.get(uri);
};

module.exports.post = post;
module.exports.get = get;
