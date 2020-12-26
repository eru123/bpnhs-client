const axios = require("./axios");
const req = require("./url");

const api = host => {
  const dataFix = (r, d) => {
    try {
      let params = req[r].params;
      if (params.length > 0) {
        params.forEach(p => {
          d[p] = d[p] || "";
        });
      }

      for (let v in req[r].super) {
        d[v] = req[r].super[v];
      }
    } catch (e) {
      console.error(e);
    }
    return d;
  };
  const post = async (r, d) => {
    return await axios.post(host, dataFix(r, d));
  };
  return post;
};

module.exports = api;
