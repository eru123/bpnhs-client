const api = require("./api");

// Change default
const default_host = "http://localhost:8080/api.php";

const host = process.env.VUE_APP_API_SERVER || default_host;
console.log(host);
module.exports = api(host);
