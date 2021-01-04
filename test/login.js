const {login} = require('./api');

login().then(e => {
    console.log("[TOKEN]",e)
})