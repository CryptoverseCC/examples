import React, { Component } from 'react';
import './App.css';



class App extends Component {
  constructor () {
    super();
    this.state = {
      options: [{
          name: "CryptoKitties.co - Captain Barbossa #134330",
          chain: "ethereum",
          contract: "0x06012c8cf97bead5deae237070f9587f8e7a266d",
          value: "134330"  
        },
        {
          name: "CryptoBots.me - Bot #4085",
          chain: "ethereum",
          contract: "0xf7a6e15dfd5cdd9ef12711bd757a9b6021abf643",
          value: "4085"  
        },
        {
          name: "EthMoji.io - Moji #480",
          chain: "ethereum",
          contract: "0xa6d954d08877f8ce1224f6bfb83484c7d3abf8e9",
          value: "480"  
        },
        {
          name: "RoboHash - Hash 0xG",
          chain: "ethereum",
          contract: "0xfa9d471300b0a4cc40ad4dfa5846864973520f45",
          value: "17"  
        },
      ],
      items: {}
    };
    this.state.options.map(option => this.fetch(option));
  }

  async fetch (option) {
    const context = `${option.chain}:${option.contract}:${option.value}`;
    const API = `https://api.userfeeds.io/ranking/experimental_nftfeed;context=${context}`;
    const response = await fetch(API);
    const data = await response.json();
    const items = this.state.items;
    items[context] = data.items.splice(0, 10);
    this.setState({items});
  }

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Userfeeds platform Example Interface.</h1>
        </header>
        <p className="App-intro">
          This interface shows feed of information shared through `claims` (json messages posted to Userfeeds contracts deployed on Ethereum mainnet or it's testnets) using ERC721 as an avatar sharing those information.

          <br/>
          You can see an example of using such feed (althrough more complex) at <a href="https://cryptopurr.co/134330">cruptopurr.co/134330</a>
          <br/>
          All ERC721 compilant contracts are supported out of the box.
          
        </p>
        {this.state.options.map(option => <div>
          <h2>{option.name}</h2>
          <strong>Avatar ID: {option.chain}:{option.contract}:{option.value}</strong>
          <ul>
          {(this.state.items[`${option.chain}:${option.contract}:${option.value}`] || []).map(item => <li key={item.target}>{item.target}</li>)}
          </ul>
        </div>)}
          
        <p>
          Source code for this app can be found at <a href="https://github.com/Userfeeds/examples/tree/master/examples/feed">https://github.com/Userfeeds/examples/tree/master/examples/feed</a>
        </p>
      </div>
    );
  }
}

export default App;
