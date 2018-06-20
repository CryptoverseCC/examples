import React, { Component } from 'react';

class Link extends Component {
  constructor(props) {
    super(props);

    const { author } = props.link;
    this.state = {
      token: `${author.slice(0, 5)}...${author.slice(-3)}`
    };
  }

  render() {
    return (
      <article class="linksEach">
        <div class="linksEach-content">
          <p>
            <span class="title" v-html="link.title">{this.props.link.title}</span>
            <a
              href={this.props.link.target}
              target="_blank">
              {this.props.link.target}
            </a>
          </p>
          <p class="is-small">{this.props.link.summary}</p>
        </div>
        <div class="linksEach-sth">
          <figure class="image is-rounded"></figure>
          <div>
            <code>{this.state.token}</code>
            <small>{this.props.link.created_at}</small>
          </div>
        </div>
      </article>
    );
  }
}

export default Link;