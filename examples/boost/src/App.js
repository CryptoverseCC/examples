import React, { Component } from 'react';
import Button from '@userfeeds/button';
import './App.css';

const MAX = 3;

const images = {
  acid2: 'acid2.png',
  bitcoin: 'bitcoin.svg',
  ethereum: 'ethereum.svg',
  hawaii: 'hawaii.jpg',
  monnosuke: 'monnosuke.jpg',
  plane: 'plane.jpg',
  river: 'river.jpg',
  travel: 'travel.jpg',
  udaipur: 'udaipur.jpg',
};

const styles = {
  list: {
    display: 'inline-block',
  },
  img: {
    height: '100px',
    marginRight: '20px',
    display: 'block'
  },
  imgLarge: {
    height: '200px',
    marginRight: '50px',
    display: 'block'
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      context: '0x074675fec3548cae374029bb7b981de05d271293',
      ethereum: [],
      bentyn: [],
      kovan: [],
      rinkeby: [],
      ropsten: [],
    };
    this.fetch('ethereum');
    this.fetch('ethereum:0x108c05cac356d93b351375434101cfd3e14f7e44');
    this.fetch('kovan');
    this.fetch('rinkeby');
    this.fetch('ropsten');
  }

  async fetch(asset) {
    const API = `https://api.userfeeds.io/ranking/experimental_boost;asset=${asset};context=${
      this.state.context
    }`;
    const response = await fetch(API);
    const data = await response.json();
    const items = data.items.splice(0, MAX);
    const update = {};
    update[asset] = items;
    this.setState(update);
  }

  gallery(title, name, network, asset) {
    return <div>
      <h1>Token: {title}</h1>

      <h2>Promoted images</h2>
      <ul>
        {this.state[name].map((item) => (
          <li key={item.id} style={styles.list}>
            <img src={images[item.id.split(':').pop()]} style={styles.imgLarge} />
          </li>
        ))}
      </ul>

      <h2>All images</h2>
      <ul>
        {Object.keys(images).map((name) => (
          <li key={name} style={styles.list}>
            <img src={images[name]} style={styles.img} />
            <Button
              claim={{claim:{
                target: `userfeeds.github.io:examples:boost:${name}`,
              }}}
              assetAddress={asset}
              network={network}
              recepientAddress={this.state.context}
              value="0.01"
            >Boost</Button>
          </li>
        ))}
      </ul>
      <hr/>
    </div>
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Userfeeds platform Example Interface.</h1>
        </header>
        <p className="App-intro">
          This is sample gallery app with promoted images bar on top. It ilustrates simplest monetization model
          available for web developers using Userfeeds Platform.
        </p>

        {this.gallery("Ether (mainnet)", "ethereum", "ethereum", null)}
        {this.gallery("Bentyn (ERC20 on mainnet 0x108c05cac356d93b351375434101cfd3e14f7e44)", "bentyn", "ethereum", "0x108c05cac356d93b351375434101cfd3e14f7e44")}
        {this.gallery("Kovan (testnet)", "kovan", "kovan", null)}
        {this.gallery("Rinkeby (testnet)", "rinkeby", "rinkeby", null)}
        {this.gallery("Ropsten (testnet)", "ropsten", "ropsten", null)}

        <p>
          Source code for this app can be found at{' '}
          <a href="https://github.com/Userfeeds/examples/tree/master/examples/boost">
            https://github.com/Userfeeds/examples/tree/master/examples/boost
          </a>
        </p>
      </div>
    );
  }
}

export default App;
