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
      context: '0x04d15dbd44901c479382f4b2b4bd627c1e38a682',
      ethereum: [],
      kovan: [],
      rinkeby: [],
      ropsten: [],
    };
    this.fetch('ethereum');
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

        <h1>Token: Ether (mainnet)</h1>

        <h2>Promoted images</h2>
        <ul>
          {this.state.ethereum.map((item) => (
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
                network='ethereum'
                recepientAddress={this.state.context}
                value="0.01"
              >Boost</Button>
            </li>
          ))}
        </ul>

        <h1>Token: Kovan (testnet)</h1>

        <h2>Promoted images</h2>
        <ul>
          {this.state.kovan.map((item) => (
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
                network='kovan'
                recepientAddress={this.state.context}
                value="0.01"
              >Boost</Button>
            </li>
          ))}
        </ul>

        <h1>Token: Rinkeby (testnet)</h1>

        <h2>Promoted images</h2>
        <ul>
          {this.state.rinkeby.map((item) => (
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
                network='rinkeby'
                recepientAddress={this.state.context}
                value="0.01"
              >Boost</Button>
            </li>
          ))}
        </ul>

        <h1>Token: Ropsten (testnet)</h1>

        <h2>Promoted images</h2>
        <ul>
          {this.state.ropsten.map((item) => (
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
                network='ropsten'
                recepientAddress={this.state.context}
                value="0.01"
              >Boost</Button>
            </li>
          ))}
        </ul>


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
