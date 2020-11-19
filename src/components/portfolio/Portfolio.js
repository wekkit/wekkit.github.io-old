import React, { Component } from "react";
import Panel from "./Panel";
import Masonry from "react-masonry-component";

let counter = 0;
function bgColor() {
  const colors = ["#e74c3c", "#3498db", "#2ecc71"];
  counter === 2 ? (counter = 0) : counter++;
  return colors[counter];
}

class Portfolio extends Component {
  render() {
    const portfolioData = this.props.data;
    return (
      <div className="container-fluid portfolio">
        <div className="row">
          <div
            className="col-lg-3 portfolio-header"
            style={{ backgroundColor: bgColor() }}
          >
            <h2>{this.props.title}</h2>
          </div>
          <div className="col-lg-9">
            <Masonry
              options={{ transitionDuration: 500 }}
              className="panel-stack"
            >
              {portfolioData.map((proj) => (
                <Panel
                  key={proj.name}
                  title={proj.name}
                  desc={proj.description}
                  imgUrl={proj.imgUrl}
                  linkUrl={proj.linkUrl}
                />
              ))}
            </Masonry>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
