import React, { Component } from 'react';
import Blockies from 'react-blockies';
import Button from '@userfeeds/button';

class Item extends Component {
  constructor(props) {
    super(props);

    const { author } = props.item;
    this.state = {
      token: `${author.slice(0, 5)}...${author.slice(-3)}`
    };
  }

  render() {
    return (
      <article class="itemsEach">
        <div class="itemsEach-content">
          <p>
            <a
              href={this.props.item.target}
              target="_blank">
              {this.props.item.target}
            </a>
          </p>
          <Button
            claim={{claim:{
              target: this.props.item.id,
            }}}
            //assetAddress={this.props.asset}
            network={this.props.network}
            recepientAddress={this.props.recipient}
            value="1"
          >Boost</Button>
        </div>
        <div class="itemsEach-sth">
          <figure class="image is-rounded">
            <Blockies seed={this.props.item.author} />
          </figure>
          <div>
            <code>{this.state.token}</code>
            <small>{this.props.item.score}</small>
          </div>
        </div>
      </article>
    );
  }
}

export default Item;