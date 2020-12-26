const post = require("./api");
const { token } = require("./db");

const auth = async (vue, path) => {
  let respond = false;
  if (token.isStored()) {
    return await post("verify_token", { token: token.get() })
      .then(e => {
        respond = true;
        if (e.data.valid === true) {
          vue.$store.commit("token", true);
          vue.$router.push(path);
        } else {
          throw Error("Invalid token");
        }
      })
      .catch(() => {
        if (respond === true) {
          vue.$store.commit("token", false);
          token.remove();
        } else {
          console.warn("Can't contact server for token verification");
        }
      });
  } else {
    return false;
  }
};
const unauth = async (vue, path) => {
  if (!token.isStored()) {
    vue.$store.commit("token", false);
    vue.$router.push(path);
  } else if (vue.$store.state.token === null) {
    vue.$store.commit("token", true);
  }
};

module.exports = {
  auth,
  unauth
};
