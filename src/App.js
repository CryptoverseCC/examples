import React, { Component } from 'react';
import logo from './logo.svg';
import examples from './examples.json';
import './App.css';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import GridList, { GridListTile } from 'material-ui/GridList';
import Button from 'material-ui/Button';


const classes = {
  red: "",
  card: "",
  media: "",
  title: {
    textTransform: "capitalize"
  }
}

examples.sort(function(a, b) {
  var titleA = a.title.toUpperCase(); // ignore upper and lowercase
  var titleB = b.title.toUpperCase(); // ignore upper and lowercase
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to dashboard of Userfeeds Platofrm examples</h1>
        </header>
        <p className="App-intro">
          Click on example card to go to live example.
        </p>
         <GridList cellHeight={300} cols={4}>
          {examples.map(app => (
            <GridListTile key={app.id}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography style={classes.title} gutterBottom variant="headline" component="h2">
                    {app.title}
                  </Typography>
                  <Typography component="p">
                    {app.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={() => {
                    window.open(`https://userfeeds.github.io/examples/examples/${app.id}/`, '_blank');
                  }}>
                    Go to live example
                  </Button>
                  <Button size="small" color="primary" onClick={() => {
                    window.open(`https://github.com/Userfeeds/examples/tree/master/examples/${app.id}/`, '_blank');
                  }}>
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
