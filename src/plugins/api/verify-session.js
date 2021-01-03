const api = require("./index");
const token = require("../db/token");

const notice = (vue, path) => {
  try {
    vue.$toast.error("Your session is expired, you need to login again.");
  } catch ($e) {
    console.warn("[Verify Session] Toast Error", $e);
  }
  // alert("Your session is expired, you need to login again.");
  vue.$router.push(path).catch(() => {});
};

const verify = (vue, path) => {
  if (token.isStored()) {
    let t = token.get();
    let res = false;
    return api("verify_token", { token: t })
      .then(e => {
        res = true;
        if (e.data.status !== true) {
          notice(vue, path);
        }
      })
      .catch(() => {
        if (res === true) {
          notice(vue, path);
        }
      });
  } else {
    notice(vue, path);
  }
};

module.exports = verify;
