function deepClone(obj) {
    let clone = {};
    for (let key in obj) {
        let val = obj[key];
        clone[key] = (typeof (val) === "object") ? deepClone(val) : val;
    }
    return clone;
}

module.exports = {
    deepClone
};