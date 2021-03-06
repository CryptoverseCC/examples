import React, { Component } from 'react';
import './App.css';

const VOTE = 35;
const VOTE_API = `https://cors-anywhere.herokuapp.com/https://www.etherchain.org/coinvote/poll/${VOTE}/data/json`;
const USERFEEDS_API = `https://api.userfeeds.io/ranking/`;


const Votes = function Votes (params) {
  console.log(params.votes);
  let votes = params.votes.map(item => {
    item = JSON.parse(item.signature)
    return <li key={item.signature}>
      {item.address} - {item.msg}
    </li>;
  });

  return <ul>
    {votes}
  </ul>
}


class App extends Component {

  constructor() {
    super();
    this.state = {
      votes: [],
      groups: {},
      data: [],
      transactions: {},
      hodl: {},
      assets: {},
      age: {}
    };
  }
  
  componentDidMount() {
    this.fetch();
  }

  async fetch() {
    let response = await fetch(VOTE_API);
    let votes = await response.json();
    let addresses = [];

    let groups = {}

    votes = votes.map(item => {
      let vote = JSON.parse(item.signature);
      let data = vote.msg.split(' - ');
      let answer = data[2];
      (groups[answer] = groups[answer] || []).push(vote.address);
      addresses.push(vote.address);
      return {
        address: vote.address,
        vote: data[2]
      }
    });

    let enhancedResponse = await fetch(USERFEEDS_API, {
      body: JSON.stringify({
        flow: [
          {
            algorithm: 'governance_simple',
            params: {
              identity: addresses
            }
          }
        ]
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: 'POST',
    });
    let enhancedData = await enhancedResponse.json();
    let addrData = {};
    enhancedData.items.map(item => addrData[item.identity] = item)

    let transactions = {};
    let hodl = {};
    let assets = {};
    let age = {};

    Object.keys(groups).map(answer => {
      transactions[answer] = (transactions[answer] || 0) + votes.reduce((acc, cv) => { 
        let val = (cv.vote === answer ? (addrData[cv.address] || {transfers: 0}).transfers || 0 : 0);
        return acc + val;
      }, 0);

      hodl[answer] = (hodl[answer] || 0) + votes.reduce((acc, cv) => { 
        let val = (cv.vote === answer ? (addrData[cv.address] || {hodl: 0}).hodl || 0 : 0);
        return acc + val;
      }, 0);

      assets[answer] = (assets[answer] || 0) + votes.reduce((acc, cv) => { 
        let val = (cv.vote === answer ? (addrData[cv.address] || {assets: []}).assets.length || 0 : 0);
        return acc + val;
      }, 0);

      let date = new Date();
      age[answer] = (age[answer] || 0) + votes.reduce((acc, cv) => { 
        let val = (cv.vote === answer ? (addrData[cv.address] || {since: 0}).since || 0 : 0);
        return acc + ((date - val) / 1000 / 60 / 60 / 24);
      }, 0);
    })

    console.log(transactions);

    this.setState({votes, groups, transactions, hodl, assets, age});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Governance Enhanced (Work In Progress)</h1>
          <p className="App-intro">
            This app assumes data on etherchain.org are valid. <br/>
            Please go to <a href="https://etherchain.org/">https://etherchain.org/</a> to vote.
          </p>
        </header>
        {
          //<Votes votes={this.state.votes}/>
        }

        <h2>Perspectives on VOTE #{VOTE}</h2>
        <a href="https://www.etherchain.org/coinvote/poll/{VOTE}">https://www.etherchain.org/coinvote/poll/{VOTE}</a>

        <h3>Number of Votes</h3>
        <ul>
          {Object.keys(this.state.groups).map(answer => <li key={answer}>{answer}: {this.state.groups[answer].length}</li>)}
        </ul>

        <h3>Transactions</h3>
        <p>
          Number of transaction made by addresses voting for given answer

          <br/>* This score is incomplete as our DB is missing part of oldest blocks
        </p>
        <ul>
          {Object.keys(this.state.transactions).map(answer => <li key={answer}>{answer}: {this.state.transactions[answer]}</li>)}
        </ul>

        <h3>HODL score*</h3>
        <p>
          Each address is assigned score that corresponds to how much token it was wolding through time.
          Think https://en.wikipedia.org/wiki/Integral of amount of token through time.

          <br/>* This score is incomplete as our DB is missing part of oldest blocks
        </p>
        <ul>
          {Object.keys(this.state.hodl).map(answer => <li key={answer}>{answer}: {this.state.hodl[answer]}</li>)}
        </ul>

        <h3>Assets*</h3>
        <p>
          Each address is assigned a number that represents number of all assets this address ever interacted with.
          Number of contracts on Ethereum and all of it's testnets.
          
          <br/>* We hold Ether and all test Ether (kovan, rinkeby, ropsten) as assets so this score also includes them.
        </p>
        <ul>
          {Object.keys(this.state.assets).map(answer => <li key={answer}>{answer}: {this.state.assets[answer]}</li>)}
        </ul>

        <h3>Age*</h3>
        <p>
          Each address is assigned a number that represents time since first transaction.
          Score is a sum of those, providing cumulative age of voters.

          <br/>* This score is incomplete as our DB is missing part of oldest blocks
        </p>
        <ul>
          {Object.keys(this.state.age).map(answer => <li key={answer}>{answer}: {parseInt(this.state.age[answer], 10)} days</li>)}
        </ul>

        <h3>Other</h3>
        <p>This list is by no means complete. Those are just first things that came to our minds</p>

        <h3>Mixed</h3>
        <p>It's possible to mix all of above metrics to create combined perspective</p>
        
      </div>
    );
  }
}

export default App;
