import React, { Component } from 'react';
import logo from './logo.svg';
import examples from './examples.json';
import './App.css';
import Card, { CardActions, CardContent, CardTitle } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import GridList, { GridListTile } from 'material-ui/GridList';
import Button from 'material-ui/Button';


const classes = {
  red: "",
  card: "",
  media: "",

}

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
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    {app.title}
                  </Typography>
                  <Typography component="p">
                    {app.summary}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={() => {
                    window.location.href = `/examples/examples/${app.name}/`;
                  }}>
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
