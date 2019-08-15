import {_0, _MAX_UINT256} from "../constants"
import BigNumber from 'bignumber.js'

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

export const ensureAllUInt256 = (bigNumbers) => {
    bigNumbers.forEach(ensureUInt256)
};

export const ensureUInt256 = (bigNumber) => {
    if (!bigNumber.isInteger() || bigNumber.isLessThan(_0) || bigNumber.isGreaterThan(_MAX_UINT256)) {
        throw Error(`Passed bigNumber '${bigNumber}' is not a valid uint256.`)
    }
};

export const parseRat = (ratStr) => {
    ratStr = Number.parseFloat(ratStr);
    if (ratStr === 0) {
        return {
            numerator: new BigNumber('0'),
            denominator: new BigNumber('1')
        }
    }
    ratStr = `${ratStr}`;
    let dotIndex = ratStr.indexOf(".");
    if (dotIndex === -1) {
        return {
            numerator: new BigNumber(ratStr),
            denominator: new BigNumber('1')
        }
    }
    let a = ratStr.substr(0, dotIndex);
    let b = ratStr.substr(dotIndex + 1);
    let m = b.length;
    let intPart = new BigNumber(Number.parseInt(a) * Math.pow(10, m));

    let denominator = new BigNumber(a === "0" ? Math.pow(10, m) : intPart);
    let numerator = new BigNumber(b).plus(intPart);

    return {
        numerator: numerator,
        denominator: denominator
    }
};