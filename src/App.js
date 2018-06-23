import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

import examples from './examples.json';
import './App.css';

examples.sort(function(a, b) {
  const titleA = a.title.toUpperCase(); // ignore upper and lowercase
  const titleB = b.title.toUpperCase(); // ignore upper and lowercase

  if (titleA < titleB) {
    return -1;
  }

  if (titleA > titleB) {
    return 1;
  }

  return 0;
});

class App extends Component {
  render() {
    return (
      <div className="App is-examples">
        <Navbar />
        <main className="is-examples">
          <Header title="Examples" subtitle="A collection of example interfaces" />
          <div className="container">
            <div className="columns is-multiline">
              {examples.map(app => (
                <div className={`column is-one-third is-${app.id}`}>
                  <Card app={app} />
                </div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
