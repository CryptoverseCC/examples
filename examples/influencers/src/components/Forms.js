import Button from '@userfeeds/button';
import React, { Component } from 'react';


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
              value: "https://cryptoinfluencerslist.com"
            }
          ]
        }}
        network="kovan"
        recepientAddress="0x6be450972b30891b16c8588dcbc10c8c2aef04da"
        value="0.001"
      >Add</Button>
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

  handleSubmit(event) {
    let urls = this.state.urls.split(' ');
    console.log(urls);
    event.preventDefault();
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
