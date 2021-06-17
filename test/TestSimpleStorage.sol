pragma solidity >=0.4.21 <=0.8.5;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/SimpleStorage.sol";
import "../contracts/Gtest.sol";

contract TestSimpleStorage {
    function testItStoresAValue() public {
        SimpleStorage simpleStorage =
            SimpleStorage(DeployedAddresses.SimpleStorage());

        simpleStorage.set(89);

        uint256 expected = 89;

        Assert.equal(
            simpleStorage.get(),
            expected,
            "It should store the value 89."
        );
    }
}

contract TestSimpleStorage {
    function testItStoresAValue2() public {
        Test flip = Test(DeployedAddresses.Test());

        flip.set(0);

        uint256 expected = 1;

        Assert.equal(flip.get(), expected, "It should store the value 89.");
    }
}
