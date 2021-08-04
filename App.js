import React, { Component } from 'react';
import Navbar from './Navbar';
import User from './User';
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
    
    clickHandler = () => {
        const newCount = this.state.clickCount + 1;
        this.setState({ clickCount: newCount });
        if (newCount % 5 === 0) {
            const newColor = this.colorMapper();
            this.setState({ backColor: newColor });
        };
    };

  render() {
    return (
        <div className="App">
            <Navbar />
            <h1>React</h1>
            <p>Compteur: {this.state.clickCount}</p>
            <button onClick={this.clickHandler}>Cliquez</button>
            <User
                color={this.state.backColor}
                firstName={this.state.userA.firstName}
                avatarUrl={this.state.userA.avatarUrl}
                bootcamp={this.state.bootcamp}/>
            <User
                firstName={this.state.userB.firstName}
                avatarUrl={this.state.userB.avatarUrl}
                bootcamp={this.state.bootcamp}
            />
        </div>
      
    );
  }
}


export default App;
