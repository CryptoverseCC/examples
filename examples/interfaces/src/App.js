import React, { Component } from 'react';

import './App.scss';

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
        <header className="App-header">
          <h1 className="App-title">Welcome to Userfeeds platform Example Interface.</h1>
        </header>
        <p className="App-intro">
          Values that where sent using `credits` key inside `claims` (json messages used by Userfeeds Platform to send information) from all claims ever sent.

          Basically it is popularity ranking based on how much usage each interface is generating.
        </p>

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

        <p>
          Source code for this app can be found at <a href="https://github.com/Userfeeds/examples/tree/master/examples/interfaces">https://github.com/Userfeeds/examples/tree/master/examples/interfaces</a>
        </p>
      </div>
    );
  }
}

export default App;
