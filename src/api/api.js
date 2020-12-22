const axios = require("./axios");

const req = {
  test: { url: "", params: [] },
  register: {
    url: "/api/register",
    params: ["user", "pass", "fname", "mname", "lname", "gender", "email"]
  },
  login: { url: "/api/login", params: ["user", "pass"] }
};

const api = host => {
  const urlFix = r => {
    let url = host + req[r].url;
    return url;
  };
  const dataFix = (r, d) => {
    try {
      let params = req[r].params;
      if (params.length > 0)
        params.forEach(p => {
          d[p] = d[p] || "";
        });
    } catch (e) {
      console.error(e);
    }
    return d;
  };
  const get = async (r, d) => {
    return await axios.get(urlFix(r), dataFix(r, d));
  };
  const post = async (r, d) => {
    return await axios.post(urlFix(r), dataFix(r, d));
  };
  return { get, post };
};

module.exports = api;
