const {login} = require('./api');
const info = {};
const token = 'fecf1cfc164af516439d97360fa89f25';


const getInfo = async ()  => {
    info.token = await login(token);
}

getInfo().then(() => console.log(info));