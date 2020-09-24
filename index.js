const openDSU = require("opendsu");
const resolver = openDSU.loadApi("resolver");
const GtinDSUFactory = require("./GTIN_DSU_Factory");

resolver.registerDSUFactory("gtin", new GtinDSUFactory(resolver));
module.exports = require("./GTIN_SSI");

const gtinResolver = require("./gtin-resolver");
gtinResolver.createGTIN_SSI()