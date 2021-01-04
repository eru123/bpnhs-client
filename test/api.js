const api = require("../src/plugins/api");


const login = async (token = null) => {
    if(typeof token == "string") return token;
    return await api("login", {
        user: "lighty262",
        pass: "pass"
    })
        .then(e => {
            return e.data.token;
        })
        .catch(() => {
            return false;
        })
};

const register = async () => {
    return await api("register", {
        user: "lighty262",
        pass: "pass",
        fname: "jericho",
        mname: "ladag",
        lname: "aquino",
        email: "yeoligoakino@gmail.com",
        phone:"+639360000000",
        address: "Brooke's Point, Palawan, Philippines",
        gender: "male",
        position: "admin",
        level: 1
    })
        .then(e => {
            return e.data;
        })
        .catch(() => {
            return false;
        })
}
const resetdb = async () => {
    // Development only
    return await api("resetdb",{
        p:"resetdb"
    }).then(e => {return e.data}).catch(() => {return false})
}
module.exports = {login,register,resetdb};
