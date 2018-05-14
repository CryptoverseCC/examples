import React, { Component } from 'react';
import Button from '@userfeeds/core';
import './App.css';

const MAX = 3;

const images = {
  acid2:"acid2.png",
  bitcoin:"bitcoin.svg",
  ethereum:"ethereum.svg",
  hawaii:"hawaii.jpg",
  monnosuke:"monnosuke.jpg",
  plane:"plane.jpg",
  river:"river.jpg",
  travel:"travel.jpg",
  udaipur:"udaipur.jpg"
}

const styles = {
  list: {
    display: "inline"
  },
  img: {
    height: "100px",
    marginRight: "20px"
  }
}

class App extends Component {
  constructor () {
    super();
    this.state = {
      asset: "ethereum",
      context: "0xCdF8957f213b6Cad32b1C975126Ee506237b711d",
      items: []
    };
    this.fetch();
  }

  async fetch () {
    const API = `https://api.userfeeds.io/ranking//ranking/experimental_boost;asset=${this.state.asset};context=${this.state.context}`;
    const response = await fetch(API);
    const data = await response.json();
    const items = data.items.splice(0, MAX);
    this.setState({items});
  }

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Userfeeds platform Example Interface.</h1>
        </header>
        <p className="App-intro">
          This is sample gallery app with promoted images bar on top. It ilustrates simplest monetization model available for web developers using Userfeeds Platform.
        </p>

        <h2>Promoted images</h2>
        <ul>
          {this.state.items.map(item => 
            <li key={item.target} style={styles.list}>
              <img src={item.target.split(':').pop()} style={styles.img}/>
            </li>)}
        </ul>

        <h2>All images</h2>
        <ul>
          {Object.keys(images).map(name => 
            <li key={name} style={styles.list}>
              <img src={images[name]} style={styles.img}/>
              <Button
                assetAddress="0xd5cfec7b4443f7fe68f5f6fa4eec72aced241e5e"
                claim={{
                  target: 'claim:0x12956439435d494f98bf3a72ce569e6c42544fbdc3c88a70784e8e810aa8bdaa:0'
                }}
                network="rinkeby"
                recepientAddress="0xcd73518680ab60ec2253841909d3448bc60f0665"
                value="1"
              />
            </li>)}
        </ul>

        <p>
          Source code for this app can be found at <a href="https://github.com/Userfeeds/examples/tree/master/examples/boost">https://github.com/Userfeeds/examples/tree/master/examples/boost</a>
        </p>
      </div>
    );
  }
}

export default App;
