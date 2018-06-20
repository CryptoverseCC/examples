import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className={`card is-${this.props.app.id}`}>
        <div className="card-image">
          <div className="card-image-wrap">
            <img src={this.props.app.img} alt={this.props.app.title} />
          </div>
        </div>
        <div className="card-content">
          <h4>{this.props.app.title}</h4>
          <p>{this.props.app.description}</p>
          <footer>
            <a onClick={() => {
              window.open(`https://userfeeds.github.io/examples/examples/${this.props.app.id}/`, '_blank');
              }}>
              Live examples &rsaquo;
            </a>
            <a onClick={() => {
              window.open(`https://github.com/Userfeeds/examples/tree/master/examples/${this.props.app.id}/`, '_blank');
              }}>
              Code &rsaquo;
            </a>
          </footer>
        </div>
      </div>
    );
  }
}

export default Card;