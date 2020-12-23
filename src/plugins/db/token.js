const store = require('store');

const tokenKey = '__bpnhs_token';

const isStored = () => {
    let token = store.get(tokenKey);
    try {
        if(typeof token === "string" && token.length > 0){
            return true;
        }
    } catch (e) {
        return false;
    }

    return false;
}
const set = (token) => {
    store.set(tokenKey,token);
};
const get = () => {
    return store.get(tokenKey);
};
const remove = () => {
    store.remove(tokenKey);
}
const state = (vue) => {
    try {
        let tokenState = vue.$store.state.token;
        if(tokenState === true || tokenState === false){
            return tokenState;
        } else if(isStored() === true){
            return true;
        }
    } catch (e) {
        return false;
    }
    
    return false;
}
module.exports = {set,get,isStored,remove,state};