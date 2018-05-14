import React, { Component } from 'react';
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
        <header className="App-header">
          <h1 className="App-title">Welcome to Userfeeds platform Example Interface.</h1>
        </header>
        <p className="App-intro">
          This interface show all links submitted with transaction of <input value={this.state.token}/> token to address <input value={this.state.recipient}/> and approved (whitelisted) by address <input value={this.state.whitelist}/>. 
          <br/>
          The initial configuration of thi ranking is used in LinkExchange.io widget on <a href="https://www.stateofthedapps.com/">https://www.stateofthedapps.com/</a>
        </p>
        <table>
          <tr>
            <th>Score</th>
            <th>Link</th>
          </tr>
          {this.state.links.map(item => 
            <tr key={item.target}>
              <td>{item.score}</td>
              <td><a href={item.target}>{item.target}</a></td>
            </tr>)}
        </table>

        <p>
          Source code for this app can be found at <a href="https://github.com/Userfeeds/examples/tree/master/examples/links">https://github.com/Userfeeds/examples/tree/master/examples/links</a>
        </p>
      </div>
    );
  }
}

export default App;
