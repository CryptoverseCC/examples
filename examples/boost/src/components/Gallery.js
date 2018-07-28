import React, { Component } from 'react';
import Button from '@userfeeds/button';

const CONTEXT = '0x074675fec3548cae374029bb7b981de05d271293';

const images = {
  acid2: 'acid2.png',
  bitcoin: 'bitcoin.svg',
  ethereum: 'ethereum.svg',
  hawaii: 'hawaii.jpg',
  monnosuke: 'monnosuke.jpg',
  plane: 'plane.jpg',
  river: 'river.jpg',
  travel: 'travel.jpg',
  udaipur: 'udaipur.jpg',
};

class Gallery extends Component {
  render() {
    return (
      <section className="boost-col">
        <h1 className="boost-title">{ this.props.title }</h1>
        <h2 className="boost-subtitle">{ this.props.subtitle }</h2>

        {Object.keys(images).map((name) => (
          <div className="boost-item" key={name}>
            <figure style={{ backgroundImage: `url(${images[name]}` }}>
            </figure>

            <Button
              claim={{
                claim:{
                  target: `userfeeds.github.io:examples:boost:${name}`,
                }
              }}
              assetAddress={ this.props.asset }
              network={ this.props.network }
              recepientAddress={ CONTEXT }
              value="0.00001" />
          </div>
        ))}
      </section>
    );
  }
}

export default Gallery;