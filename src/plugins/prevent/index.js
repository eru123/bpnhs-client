const api = require('../api');
const {token} = require('../db'); 

const auth = async (router,path) => {
    let respond = false;
    if(token.isStored()){
        return api.post('verify_token',{token:token.get()})
        .then( e => {
            respond = true;
            if(e.data.valid === true){
                router.push(path);
            } else throw Error("Invalid token");
        })
        .catch(() => {
            if (respond === true) {
                token.remove();
            } else {
                console.warn('Can\'t contact server for token verification');
            }
        })
    } else {
        return false;
    }
};
const unauth = async (router,path) => {
    if(!token.isStored()){
        router.push(path);
    }
};

module.exports = {auth,unauth};