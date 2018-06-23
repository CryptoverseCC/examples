import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="columns is-multiline is-mobile">
            <div className="column is-2-tablet is-6-mobile is-first">
              <h5 className="footer-title"><a href="Home">Userfeeds</a></h5>
              <ul className="footer-links">
                <li>
                  <a href="https://userfeeds.io/protocol">Protocol</a>
                </li>
                <li>
                  <a href="https://userfeeds.io/about">About</a>
                </li>
                <li>
                  <a href="https://userfeeds.io/careers">Careers</a>
                </li>
              </ul>
            </div>
            <div className="column is-2-tablet is-6-mobile">
              <h5 className="footer-title">Use cases</h5>
              <ul className="footer-links">
                <li>
                  <a href="https://userfeeds.io/collectibles">Collectibles</a>
                </li>
                <li>
                  <a href="https://userfeeds.io/airdrop">Airdrop</a>
                </li>
                <li>
                  <a href="https://userfeeds.io/annotations">Annotations</a>
                </li>
                <li>
                  <a href="https://userfeeds.io/newsfeeds">Newsfeeds</a>
                </li>
                <li>
                  <a href="https://userfeeds.io/messaging">Messaging</a>
                </li>

              </ul>
            </div>
            <div className="column is-2-tablet is-6-mobile">
              <h5 className="footer-title">Developers</h5>
              <ul className="footer-links">
                <li>
                  <a href="https://userfeeds-platform.readthedocs-hosted.com/en/latest/">Documentation</a>
                </li>
                <li>
                  <a href="http://stats.pingdom.com/fj4x6r76hd8z">API Status</a>
                </li>
              </ul>
            </div>
            <div className="column is-2-tablet is-6-mobile">
              <h5 className="footer-title">Products</h5>
              <ul className="footer-links">
                <li>
                  <a href="http://linkexchange.io" className="is-target-blank">
                    Link Exchange <i className="rarr" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="https://userfeeds.github.io/cryptopurr/">
                    Purr<i className="rarr" aria-hidden="true"></i>
                  </a>
                  <a href="https://userfeeds.github.io/cryptobeep/">
                    Beep<i className="rarr" aria-hidden="true"></i>
                  </a>
                  <a href="https://userfeeds.github.io/cryptomoji/">
                    Moji<i className="rarr" aria-hidden="true"></i>
                  </a>
                  <a href="https://userfeeds.github.io/robohash-book/">
                    Hash<i className="rarr" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="column is-4-tablet is-12-mobile is-links">
              <div className="footer-social">
                <a href="https://t.me/userfeeds">
                  <img src="assets/logo-footer-telegram.svg" width="50" height="50" alt="Telegram"/>
                  <strong>Telegram</strong>
                </a>
                <a href="https://gitter.im/Userfeeds/">
                  <img src="assets/logo-footer-gitter.svg" width="50" height="50" alt="Gitter"/>
                  <strong>Gitter</strong>
                </a>
                <a href="https://medium.com/userfeeds">
                  <img src="assets/logo-footer-medium.svg" width="50" height="50" alt="Medium"/>
                  <strong>Medium</strong>
                </a>
                <a href="https://twitter.com/userfeeds">
                  <img src="assets/logo-footer-twitter.svg" width="50" height="50" alt="Twitter"/>
                  <strong>Twitter</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="columns">
            <div className="column is-4 is-newsletter">
              <h5 className="footer-title">Sign up for updates</h5>
              <form action="https://userfeeds.us17.list-manage.com/subscribe/post?u=9cf96f96e2410ddcc7ccd1577&amp;id=0317d71772" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate>
                <div className="footer-form field has-addons">
                  <div className="control">
                    <input className="input is-large" placeholder="Your email address" value="" type="email" id="mce-EMAIL" name="EMAIL"/>
                  </div>
                  <div className="control">
                    <button className="button is-large is-info" type="submit"  value="Subscribe me" name="subscribe">
                      Subscribe me
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;