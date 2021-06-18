var SimpleStorage = artifacts.require("./SimpleStorage.sol");
/*
var gTest = artifacts.require("../contracts/Gtest.sol");
var rps = artifacts.require("../contracts/RPS.sol");
*/
module.exports = function (deployer) {
  deployer.deploy(SimpleStorage);
};
