pragma solidity ^0.8.4;

contract Test {
     //uint256 public num = uint256(blockhash(block.number -1)) % 10;
     uint256 public num = uint256(blockhash(block.number -1)) % 2;
     uint8 public prize;
     uint public balance = address(this).balance;
       
     event funded(address owner, uint funding);

    modifier costs(uint cost){
        require(msg.value >= cost);
        _;
    }

    function set(uint8 _num)  public payable{
        
        if(num == _num){
//            msg.sender.transfer(msg.value * 2);
        
        }
        
    }
 
    function fund() public payable costs(0.1 ether) returns(uint){
        require(msg.value != 0); // you need coin to earn coin :)
      
        emit funded(msg.sender, msg.value);
        balance += msg.value;
        return msg.value;
    }
}