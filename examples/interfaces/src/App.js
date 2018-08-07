import React, { Component } from 'react';
import _ from 'lodash';

import Navbar from './components/Navbar';
import Header from './components/Header';

import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      claims: []
    };
    this.fetch();
  }

  async fetch () {
    const API = `https://api.userfeeds.io/ranking/experimental_credits;type=interface`;
    const response = await fetch(API);
    const data = await response.json();
    const claims = [];

    const interfaces = _.groupBy(data.items, v => {
      let item;

      try {
        item = new URL(v.credit_value).host;
      } catch (error) {
        item = v.credit_value;
      }

      return item;
    });

    _.forOwn(interfaces, (item, key) => {
      const claim = {
        name: key,
        number: item.length
      };

      claims.push(claim);
    });

    this.setState({claims});
  }

  render() {

    return (
      <div className="App">
        <Navbar />
        <main>
          <Header title="Interfaces" subtitle="Values that where sent using `credits` key inside `claims` (json messages used by Userfeeds Platform to send information) from all claims ever sent. Basically it is popularity ranking based on how much usage each interface is generating." />

          <section className="interfaces">
            <div className="container">
              <table className="table is-hoverable is-fullwidth">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th className="interface-number">Claims</th>
                  </tr>
                </thead>
                <tbody>
                  {console.log("Claims", this.state.claims)}
                  {this.state.claims.map((claim, index) =>
                    <tr key={`item-${index}`}>
                      <td className="interface-index">#{ index+1 }</td>
                      <td className="interface-name">{claim.name}</td>
                      <td className="interface-number">{claim.number}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
