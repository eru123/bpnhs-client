const {register} = require('./api');

register().then(e => {
    console.log(e)
}).then(e => {
    console.warn(e)
})