import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';

import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      items: []
    };
    this.fetch();
  }

  async fetch () {
    const API = `https://api.userfeeds.io/ranking/experimental_credits;type=interface`;
    const response = await fetch(API);
    const data = await response.json();
    const items = data.items;
    this.setState({items});
  }

  render() {

    return (
      <div className="App">
        <Navbar />
        <main>
          <Header title="Interfaces" subtitle="Values that where sent using `credits` key inside `claims` (json messages used by Userfeeds Platform to send information) from all claims ever sent. Basically it is popularity ranking based on how much usage each interface is generating." />

          <section className="interfaces">
            <div className="container">
              <table>
                <tbody>
                  <tr>
                    <th>Score</th>
                    <th>Interface</th>
                  </tr>
                  {this.state.items.map((item, index) =>
                    <tr key={`item-${index}`}>
                      <td>{item.sequence}</td>
                      <td><a href={item.credit_value}>{item.credit_value ? item.credit_value.substr(0, 100) : ""}</a></td>
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
