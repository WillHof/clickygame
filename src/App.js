import React from 'react';
import './App.css';
import Nav from "./components/nav";
import "./components/images";
import Images from "./components/images";
function App() {
  return (
    <div>
      <Nav />
      <div className="jumobtron-fluid">
        <div className="container">
          <h1 classname="display-4 mt-5 mx-auto">Clicky Game</h1>
          <p>Click the pictures you haven't clicked to get a point. Dont click the same one twice or you lose. </p>
        </div>
      </div>
      <Images />
    </div>

  )
}
export default App;
