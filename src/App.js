import React from 'react';
import './App.css';
import Nav from "./components/nav";
import Images from "./components/images";
import dogs from "./dogs.json";
class App extends React.Component {
  state = {
    currentscore: 0,
    guesscheck: "Click an image to begin!",
  };
  render() {
    return (
      <div>
        <Nav
          currentscore={this.state.currentscore}
          guesscheck={this.state.guesscheck}
        />
        <div className="jumbotron-fluid">
          <div className="container">
            <h1 classname="display-4 mt-5 mx-auto">Clicky Game</h1>
            <p>Click the pictures you haven't clicked to get a point. Dont click the same one twice or you lose. </p>
          </div>
        </div>
        <Images
          doggos={dogs} />
      </div>
    )
  }
}
export default App;
