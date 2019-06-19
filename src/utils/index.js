const isString = (obj) => {
    return typeof obj === "string"
};

const isBuffer = (obj) => {
    return Buffer.isBuffer(obj)
};

const isArray = (obj) => {
    return Array.isArray(obj)
};

const isEmpty = (obj) => {
    switch (typeof obj) {
        case "undefined": {
            return true
        }
        case "string": {
            return obj.length === 0
        }
        case "number": {
            return obj === 0
        }
        case "object": {
            if (obj == null) {
                return true
            } else if (Array.isArray(obj)) {
                return obj.length === 0
            } else {
                return Object.keys(obj).length === 0
            }
        }
    }
};

const deepCopy = (obj) => {
    if(typeof obj != 'object'){
        return obj;
    }
    let o = {};
    for ( let attr in obj) {
        o[attr] = deepCopy(obj[attr]);
    }
    return o;
};

module.exports = class Utils {
    static isString(obj){
        return isString(obj)
    }

    static isBuffer(obj){
        return isBuffer(obj)
    }

    static isArray(obj){
        return isArray(obj)
    }

    static isEmpty(obj) {
        return isEmpty(obj)
    }

    static parseUrl(url,...args){
        let u = url;
        if (Array.isArray(args)) {
            args.forEach((param) =>{
                u = u.replace("%s",param)
            });
        }
        return u
    }

    static deepCopy(obj){
        return deepCopy(obj)
    }
};