import React, { Component } from "react";
import coinFlipContract from "./contracts/Test.json";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import CoinFlipButton from "./components/CoinFlipButton";

import Typography from "@material-ui/core/Typography";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  state = {
    storageValue: 0,
    web3: null,
    accounts: null,
    contract: null,
    input: 0,
    balance: 0,
    status: 0,
  };

  componentDidMount = async () => {
    try {
      console.log("in effect");
      const web3 = await getWeb3();

      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = await coinFlipContract.networks[networkId];

      const instance = await new web3.eth.Contract(
        coinFlipContract.abi,
        "0xDf4AAF75bd2bd7D42134557d7acA52976493A0b5"
      );

      const balance = await instance.methods.balance().call();
      this.setState({
        web3,
        accounts,
        contract: instance,
        balance: balance / 1000000000000000000,
      });
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };
  handleInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  coinFlip = async (x) => {
    try {
      const { accounts, contract } = this.state;

      if (this.state.balance < 1) {
        alert("Insufficient balance.");
        throw "Insufficient balance";
      }
      await contract.methods
        .set(x)
        .send({ from: accounts[0], value: 1 * 10 ** 18 });
      const num = await contract.methods.num().call();
      let newBalance = await contract.methods.balance().call();
      newBalance = newBalance / 1000000000000000000;
      newBalance < this.state.balance
        ? this.setState({ status: 1 })
        : this.setState({ status: 2 });

      this.setState({ balance: newBalance });
    } catch (error) {
      console.log(error);
    }
  };

  addFunds = async () => {
    try {
      const { accounts, contract } = this.state;
      await contract.methods
        .fund()
        .send({ from: accounts[0], value: 5 * 10 ** 18 });

      const balance = await contract.methods.balance().call();
      this.setState({ balance: balance / 1000000000000000000 });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    let status;
    console.log("this.state.status", this.state.status);
    if (this.state.status == 0) {
      status = "-";
    } else if (this.state.status == 1) {
      status = "Win";
    } else if (this.state.status == 2) {
      status = "Lose";
    }
    return (
      <div
        className="App"
        style={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 24,
          flexDirection: "column",
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Flip a Coin
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          Head or Tails? (1ETH)
        </Typography>
        <div style={{ marginTop: 16 }}>
          <CoinFlipButton
            title="Heads"
            value={0}
            onClick={() => this.coinFlip(0)}
          />
          <CoinFlipButton
            title="Tails"
            value={1}
            onClick={() => this.coinFlip(1)}
          />
        </div>
        <Typography variant="h3" component="h3" gutterBottom>
          Balance: {this.state.balance}
        </Typography>
        <Typography variant="h3" component="h3" gutterBottom>
          {status}
        </Typography>
        <CoinFlipButton
          title="Add Funds (5 eth)"
          onClick={this.addFunds}
          isItfund={true}
        />
      </div>
    );
  }
}

export default App;
