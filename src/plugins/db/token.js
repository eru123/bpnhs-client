const store = require('store');

const tokenKey = '__bpnhs_token';

const test = (token) => {
    store.set(set,token);
};
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
module.exports = {set,get,test,isStored,remove};