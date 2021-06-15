// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract RPS {
    address public player1;
    address public player2;
    uint256 public bet;
    uint8 public num1;
    uint8 public num2;

    //bool public gameOver;

    //
    // stone paper scissors
    // --1-- --2-- ---3---

    constructor() public payable {
        player1 = msg.sender;
        bet = msg.value;
    }

    function join() public payable {
        require(msg.value == bet);
        bet += msg.value;
        player2 = msg.sender;
    }

    function move_p1(uint8 _num1) public {
        require(_num1 >= 1 && _num1 <= 3);
        require(msg.sender == player1);
        // there should be player 2 to make your move
        num1 = _num1;
    }

    function move_p2(uint8 _num2) public {
        require(_num2 >= 1 && _num2 <= 3);
        require(num1 != 0);
        require(msg.sender == player2);
        num2 = _num2;
        if (num1 == num2) {
            payable(player2).transfer(bet / 2);
            payable(player1).transfer(bet / 2);
            bet = 0;
        }
        if (
            (num1 == 2 && num2 == 1) ||
            (num1 == 3 && num2 == 2) ||
            (num1 == 1 && num2 == 3)
        ) {
            payable(player1).transfer(bet);
            bet = 0;
        } else {
            payable(player2).transfer(bet);
            bet = 0;
        }
    }
    // function payment(){

    //}
}
