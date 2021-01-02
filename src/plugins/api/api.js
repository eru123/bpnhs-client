const axios = require("./axios");
const req = require("./url");

const api = host => {
  const dataFix = (r, d) => {
    try {
      if (
        typeof req[r] == "object" &&
        typeof req[r].params == "object" &&
        typeof req[r].params !== "undefined"
      ) {
        if (req[r].params > 0) {
          req[r].params.forEach(p => {
            d[p] = d[p] || "";
          });
        }
        for (let v in req[r].super) {
          d[v] = req[r].super[v];
        }
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
