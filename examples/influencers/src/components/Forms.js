import Button from '@userfeeds/button';
import React, { Component } from 'react';
import Web3 from 'web3';
import core from '@userfeeds/core';

export class FormSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(name) {
    return (event) => {
      let data = {};
      data[name] = event.target.value;
      this.setState(data);  
    }
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return <div>
      <label>
        URLs: <input type="text" value={this.state.url} onChange={this.handleChange("url")} />
      </label>
      <br/>
      <Button
        claim={{
          type:["about"],
          claim:{
            target: this.state.url,
            about: "test"
          },
          credits: [
            {
              type: "interface", 
              value: "https://userfeeds.github.io/examples/examples/influencers/"
            }
          ]
        }}
        network="http"
        onTransactionHash={console.info}
        onTransactionStateChange={console.info}
      />
    </div>
  }
}


export class FormMultiple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(name) {
    return (event) => {
      let data = {};
      data[name] = event.target.value;
      this.setState(data);  
    }
  }

  async handleSubmit(event) {
    let urls = this.state.urls.split(' ');

    const web3 = new Web3(window.web3.currentProvider);
    
    urls.forEach(async (url) => {
      const claimId = await core.http.sendClaim(web3, {
        type:["about"],
        claim:{
          target: url,
          about: "test"
        },
        credits: [
          {
            type: "interface", 
            value: "https://userfeeds.github.io/examples/examples/influencers/"
          }
        ]
      });

      console.info(claimId);
    });
  }

  render() {
    return <div>
      <label>
        URLs: <textarea value={this.state.urls} onChange={this.handleChange("urls")}></textarea>
      </label>
      <br/>
      <button className="button" type="button" onClick={this.handleSubmit}>Add multiple</button>
    </div>
  }
}
