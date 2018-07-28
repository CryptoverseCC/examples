import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Gallery from './components/Gallery';

import './App.css';

const MAX = 3;

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

  render() {
    return (
      <div className="App">
        <Navbar />
        <main>
          <Header title="Boost" subtitle="Simplest monetization model available for web developers using Userfeeds Platform. Pay to be more visible." />

          <div className="container">
            <div className="boost-overflow">
              <Gallery title="Etherneum"
                       subtitle="Mainnet"
                       name="ethereum"
                       network="ethereum"
                       data={ this.state.bentyn }
                       asset={ null } />

              <Gallery title="Etherneum"
                       subtitle="Kovan"
                       name="kovan"
                       network="kovan"
                       data={ this.state.kovan }
                       asset={ null } />

              <Gallery title="Etherneum"
                       subtitle="Rinkeby"
                       name="rinkeby"
                       network="rinkeby"
                       data={ this.state.rinkeby }
                       asset={ null } />

              <Gallery title="Etherneum"
                       subtitle="Ropsten"
                       name="ropsten"
                       network="ropsten"
                       data={ this.state.ropsten }
                       asset={ null } />

              <Gallery title="Bentyn (ERC20 on mainnet 0x108c05cac356d93b351375434101cfd3e14f7e44)"
                       subtitle="(mainnet)"
                       name="bentyn"
                       network="ethereum"
                       data={ this.state.ethereum }
                       asset="0x108c05cac356d93b351375434101cfd3e14f7e44" />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
