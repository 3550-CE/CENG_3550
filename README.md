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
## Deflationary Approaches with the Help of Gamification

![Game](https://user-images.githubusercontent.com/39493937/122539475-518af180-d030-11eb-9aa4-e242632ca5c7.PNG)


## Cheat Sheet

```
> msg.data (bytes): complete calldata
> msg.gas (uint): remaining gas - deprecated in version 0.4.21 and to be replaced by gasleft()
> msg.sender (address): sender of the message (current call)
> msg.sig (bytes4): first four bytes of the calldata (i.e. function identifier)
> msg.value (uint): number of wei sent with the message
```

### Game 1 - Coin Flip ( Single Player )
First game we created is simple coin flip, which gives the user 50% chance to double their bet. As owner of the contract, we have to fund our contract manually.
Basically contract owner is always betting against the user. Contract owner can receive the extra fee paid by users  to interact and use it to burn more tokens.
(Some mainnets pay that extra fee to owners to encourage more burn. e.g BSC)

- [x] Game Contract
- [ ] Contract owner can withdraw the fund whenever they please
- [ ] Security improvements
![flow](https://user-images.githubusercontent.com/39493937/122539575-69627580-d030-11eb-9c2f-1f0a86d4bf98.png)

![Screenshot (68)](https://user-images.githubusercontent.com/39493937/122539391-36b87d00-d030-11eb-9fa0-927199ab525f.png)


### Game 2 - Rock Paper Scissors ( Two Players )
Contract owner is Player 1. During deploy section, contract owner should set the bet. Player 2 will join if they can afford the same amount as bet.
After betting section is done, Player 1 will their move. Player 2 can only play after Player1. 

   - paper beats the rock 
   - rock beats the scissors 
   - scissors beats the paper

- [x] Game Contract
- [ ] Time limit to prevent abuse
- [ ] Security improvements
