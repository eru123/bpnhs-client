const api = require("./index");
const token = require("../db/token");

const verify = (vue, path) => {
  if (token.isStored()) {
    let t = token.get();
    let res = false;
    api("verify_token", { token: t })
      .then(e => {
        res = true;
        if (e.data.status !== true) {
          vue.$router.push(path);
        }
      })
      .catch(() => {
        if (res === true) {
          vue.$router.push(path);
        }
      });
  } else {
    vue.$router.push(path);
  }
};

module.exports = verify;
