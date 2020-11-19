import React, { Component } from "react";
import hero from "../assets/hero.jpg";

class Hero extends Component {
  render() {
    return (
      <div className="header">
        <div
          className="bgWrapper"
          style={{ backgroundImage: `Url(${hero})` }}
        />
        <h1>KEITH CHIA</h1>
        <div className="trio">
          <p className="lead red">Developer.</p>
          <p className="lead blue">Designer.</p>
          <p className="lead green">Builder.</p>
        </div>
      </div>
    );
  }
}

export default Hero;
