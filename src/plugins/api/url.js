module.exports = {
  register: {
    super: {
      p: "register"
    },
    params: [
      "user",
      "pass",
      "fname",
      "mname",
      "lname",
      "gender",
      "email",
      "position",
      "level",
      "phone",
      "address"
    ]
  },
  login: {
    super: {
      p: "login"
    },
    params: ["user", "pass"]
  },
  logout: {
    super: {
      p: "logout"
    },
    params: ["token"]
  },
  verify_token: {
    super: {
      p: "verify_token"
    },
    params: ["token"]
  },
  account_info: {
    super: {
      p: "account_info"
    },
    params: ["token"]
  },
  user_info: {
    super: {
      p: "user"
    },
    params: ["id"]
  }
};
