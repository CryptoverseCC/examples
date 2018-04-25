import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import GridList, { GridListTile } from 'material-ui/GridList';
import Button from 'material-ui/Button';


const classes = {
  red: "",
  card: "",
  media: "",

}

const examples = [
  {name: "links", title: "Links", summary: "All Links of Ethereum Asset", image: "/static/examples/x.png"},
  {name: "second", title: "Second", summary: "Summary", image: "/static/examples/x.png"},
  {name: "third", title: "Third", summary: "Summary", image: "/static/examples/x.png"},
  {name: "fourth", title: "Fourth", summary: "Summary", image: "/static/examples/x.png"},
  {name: "fifth", title: "Fifth", summary: "Summary", image: "/static/examples/x.png"},
]


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to dashboard of Userfeeds Platofrm examples</h1>
        </header>
        <p className="App-intro">
          Click on example card to go to live example.
        </p>
         <GridList cellHeight={160} cols={4}>
          {examples.map(app => (
            <GridListTile key={app.name}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={app.image}
                  title={app.title}
                />
                <CardContent>
                  {app.summary}
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={() => window.location = `/examples/${app.name}`}>
                    Go to live example
                  </Button>
                  <Button size="small" color="primary">
                    View the code
                  </Button>
                </CardActions>
              </Card>    
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default App;
