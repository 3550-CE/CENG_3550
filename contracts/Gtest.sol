// SPDX-License-Identifier: MIT
pragma solidity >=0.8.5;

contract Test {
    //uint256 public num = uint256(blockhash(block.number -1)) % 10;
    uint256 public num = uint256(blockhash(block.number - 1)) % 2;
    bool public prize;
    uint256 public balance = address(this).balance; // balance of the contract can't be negative
    event funded(address owner, uint256 funding);
    address public receiver; // after solidity version 0.8.x+ no need to be payable

    modifier costs(uint256 cost) {
        require(msg.value >= cost);
        _;
    }

    function set(uint8 _num) public payable returns (address _receiver) {
        receiver = msg.sender;
        if (num == _num) {
            balance -= msg.value;
            prize = true;
            //   msg.sender.transfer(address(this).balance); // for solidity 0.8.x-

            payable(receiver).transfer(msg.value * 2);
            uint256 _num = uint256(blockhash(block.number - 1)) % 2;
            num = _num;
        } else {
            balance += msg.value;
            uint256 _num = uint256(blockhash(block.number - 1)) % 2;
            num = _num;
        }
    }

    function fund() public payable costs(0.1 ether) returns (uint256) {
        require(msg.value != 0); // funding the contract

        emit funded(msg.sender, msg.value);
        balance += msg.value;
        return msg.value;
    }

    function get() public view returns (uint256) {
        return num;
    }
}
