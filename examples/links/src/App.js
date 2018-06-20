import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Link from './components/Link';

import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      token: "ethereum",
      recipient: "0x3622af90ab6234d8c4fa802fe69f29d54f49f95b",
      whitelist: "0x3622af90ab6234d8c4fa802fe69f29d54f49f95b",
      links: []
    };
    this.fetch();
  }

  async fetch () {
    const API = `https://api.userfeeds.io/ranking/links;asset=${this.state.token};context=${this.state.recipient}/filter_timedecay/filter_whitelist;whitelist=${this.state.whitelist}/filter_group;sum_keys=score;sum_keys=total/`;
    const response = await fetch(API);
    const data = await response.json();
    const links = data.items;
    this.setState({links});
  }

  render() {

    return (
      <div className="App">
        <Navbar />
        <main>
          <Header title="Links" />

          <section class="links">
            <div class="container">
              {this.state.links.map(item =>
                <Link link={item} />
              )}
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
