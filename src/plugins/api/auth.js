const api = require('./index');
const {token} = require('../db');

const auth = (req, data) => {
    if (typeof data == "object") {
        data.token = token.get() || "";
    }
    return api(req,data);
}

module.exports = auth;