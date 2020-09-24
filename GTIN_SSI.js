const keyssiSpace = require("opendsu").loadApi("keyssi");

function GTIN_SSI(arraySSI) {
    this.getName = () => {
        return "gtin";
    };

    const publicFunctions = ['getDLDomain', 'getSpecificString', 'getVn', 'getHint', 'getAnchorId', 'getEncryptionKey'];
    publicFunctions.forEach(functionName => this[functionName] = arraySSI[functionName]);
}

function createGTIN_SSI(domain, gtin, batch, expiration, serialNumber) {
    let realSSI = keyssiSpace.buildArraySSI(domain, [gtin, batch, expiration]);
    let gtinSSI = new GTIN_SSI(realSSI);
    return gtinSSI;
}

function parseGTIN_SSI(ssiIdentifier) {
    ssiIdentifier.replace("gtin", "array");
    let realSSI = keyssiSpace.parse(ssiIdentifier);
    let gtinSSI = new GTIN_SSI(realSSI);
}

module.exports = {
    createGTIN_SSI,
    parseGTIN_SSI
};