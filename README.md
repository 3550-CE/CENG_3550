# CENG_3550
### Development environment
ethereum, ethereumjs, truffle, webpack, react, solidity

### Starter Files
[https://www.trufflesuite.com/boxes/react](https://www.trufflesuite.com/boxes/react)

### How to run development?

In the main folder(be sure you already downloaded truffle), run:
```
truffle develop
```

After `truffle develop`, first, run "compile". Then "migrate".
```
compile
migrate
```

Go "client/" directory with `cd client` and if there is no `node_modules/` folder, run `npm install`. 
Then:
```
npm run start
```
## Step 1 - Solo Interactions with Contracts

Useful codes
```
msg.data (bytes): complete calldata
msg.gas (uint): remaining gas - deprecated in version 0.4.21 and to be replaced by gasleft()
msg.sender (address): sender of the message (current call)
msg.sig (bytes4): first four bytes of the calldata (i.e. function identifier)
msg.value (uint): number of wei sent with the message
```

### Game 1 - Coin Flip ( Single Player )
First game we created is simple coin flip, which gives the user 50% chance to double their bet. As owner of the contract, we have to fund our contract manually.
Basically contract owner is always betting against the user.

- [x] Game Contract
- [ ] Contract owner can withdraw the fund whenever they please
- [ ] Security improvements

### Game 2 - Rock Paper Scissors ( Two Players )
Contract owner is Player 1. During deploy section, contract owner should set the bet. Player 2 will join if they can afford the same amount as bet.
After betting section is done, Player 1 will their move. Player 2 can only play after Player1. 

  - paper beats the rock 
   - rock beats the cissors 
    - scissors beats the paper
