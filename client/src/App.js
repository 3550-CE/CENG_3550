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
  };

  componentDidMount = async () => {
    try {
      const web3 = await getWeb3();

      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = await coinFlipContract.networks[networkId];

      const instance = await new web3.eth.Contract(
        coinFlipContract.abi,
        "0x3A35bA3b7cb7A3a08Db8e25195F394DbA529060b"
      );

      this.setState({ web3, accounts, contract: instance });
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

  coinFlip = async () => {
    try {
      const { accounts, contract } = this.state;

      await contract.methods.set(0).send({ from: accounts[0] });

      // Get the value from the contract to prove it worked.
      const response = await contract.methods.get().call();

      // Update state with the result.
      this.setState({ storageValue: response });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
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
          Head or Tails?
        </Typography>
        <div style={{ marginTop: 16 }}>
          <CoinFlipButton title="Heads" value={0} onClick={this.coinFlip} />
          <CoinFlipButton title="Tails" value={1} onClick={this.coinFlip} />
        </div>
      </div>
    );
  }
}

export default App;
