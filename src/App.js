import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
    userA: {
      firstName: "Jean",
      avatarUrl: "https://www.refreshmiami.com/wp-content/uploads/2018/07/55085_logo-ironhack.png"
    },
    userB: {
      firstName: "Hannah",
      avatarUrl: "https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png"
    },
    clickCount: 0,
    backColor: 'salmon',
    bootcamp: 'Ironhack'
  };

    colorMapper = () => {
    const hexColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return hexColor;
  };


  render() {
    return (
      
    )
  }
}


export default App;
