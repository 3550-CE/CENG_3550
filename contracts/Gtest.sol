pragma solidity ^0.8.4;

contract Test {
     //uint256 public num = uint256(blockhash(block.number -1)) % 10;
    uint256 public num = uint256(blockhash(block.number -1)) % 2;
    bool public prize;
    uint public balance = address(this).balance;
    event funded(address owner, uint funding);
    address  public receiver ;
    
    
    
    modifier costs(uint cost){
        
        require(msg.value >= cost);
        _;
    }

    function set(uint8 _num)  public payable returns (address _receiver) {
         receiver = msg.sender;
            if(num == _num){

        //   msg.sender.transfer(address(this).balance);
            balance -= msg.value * 2;
       prize = true;
       payable(receiver).transfer(msg.value*2);
        
    }
}




    function fund() public payable costs(0.1 ether) returns(uint){
        require(msg.value != 0); // funding contract
      
        emit funded(msg.sender, msg.value);
        balance += msg.value;
        return msg.value;
    }
}