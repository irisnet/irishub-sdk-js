export const isString = (obj) => {
    return typeof obj === "string"
};

export const isBuffer = (obj) => {
    return Buffer.isBuffer(obj)
};

export const isArray = (obj) => {
    return Array.isArray(obj)
};

export const isEmpty = (obj) => {
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

export const deepCopy = (obj) => {
    if (typeof obj != 'object') {
        return obj;
    }
    let o = {};
    for (let attr in obj) {
        o[attr] = deepCopy(obj[attr]);
    }
    return o;
};

export const parseUrl = (url, ...args) => {
    let u = url;
    if (Array.isArray(args)) {
        args.forEach((param) => {
            u = u.replace("%s", param)
        });
    }
    return u
};

export const optional = (value, option) => {
    if (isEmpty(value)) return option;
    return value
};