var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var gTest = artifacts.require("/.Gtest.sol");
var rps = artifacts.require("/.RPS.sol");

module.exports = function (deployer) {
  deployer.deploy(SimpleStorage);
};
module.exports = function (deployer) {
  deployer.deploy(gTest);
};
module.exports = function (deployer) {
  deployer.deploy(rps);
};
