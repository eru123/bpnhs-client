const api = require('./api');

api.resetdb().then(e => {
    console.log("[RESET]",e);
})