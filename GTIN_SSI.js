const openDSU = require("opendsu");
const keyssiSpace = openDSU.loadApi("keyssi");
const crypto = openDSU.loadApi("crypto");

function GTIN_SSI(arraySSI) {
    this.getName = () => {
        return "gtin";
    };

    arraySSI.getName = this.getName;

    const publicFunctions = ['getDLDomain', 'getSpecificString', 'getVn', 'getHint', 'getAnchorId', 'getEncryptionKey', 'getIdentifier'];
    publicFunctions.forEach(functionName => this[functionName] = arraySSI[functionName]);
}

function createGTIN_SSI(domain, gtin, batch, expiration, serialNumber) {
    let realSSI = keyssiSpace.buildArraySSI(domain, [gtin, batch, expiration]);
    let gtinSSI = new GTIN_SSI(realSSI);
    return gtinSSI;
}

function parseGTIN_SSI(ssiIdentifier) {
    let realSSI = keyssiSpace.parse(ssiIdentifier);
    let gtinSSI = new GTIN_SSI(realSSI);
    return gtinSSI;
}

module.exports = {
    createGTIN_SSI,
    parseGTIN_SSI
};