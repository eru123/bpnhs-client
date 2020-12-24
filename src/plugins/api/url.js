module.exports = {
  test: {
    url: "",
    params: []
  },
  register: {
    url: "/api/register",
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
    url: "/api/login",
    params: ["user", "pass"]
  },
  logout: {
    url: "/api/auth/logout",
    params: ["token"]
  },
  verify_token: {
    url: "/api/auth/verify_token",
    params: ["token"]
  },
  account_info: {
    url: "/api/account_info",
    params: ["token"]
  },
  user_info: {
    url: "/api/user/",
    params: []
  }, // concat url with user_id
  check_username: {
    url: "/api/user/check/username",
    params: ["user"]
  }
};
