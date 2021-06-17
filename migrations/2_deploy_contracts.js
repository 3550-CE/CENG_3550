var SimpleStorage = artifacts.require("./SimpleStorage.sol");
import gTest from "../contracts/Gtest.sol";
/*
var gTest = artifacts.require("../contracts/Gtest.sol");
var rps = artifacts.require("../contracts/RPS.sol");
*/
module.exports = function (deployer) {
  deployer.deploy(SimpleStorage);
};

module.exports = function (deployer) {
  deployer.deploy(gTest);
};
