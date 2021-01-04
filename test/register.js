const {register} = require('./api');

register().then(e => {
    console.log("[REGISTER]",e)
})