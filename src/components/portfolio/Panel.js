import React, { Component } from "react";

class Panel extends Component {
  render() {
    return (
      <div className="panel">
        <div
          className="panel-bg"
          style={{ backgroundImage: `Url(${this.props.imgUrl})` }}
        >
          <a
            href={this.props.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="panel-content">
              <h2>{this.props.title}</h2>
              <p>{this.props.desc}</p>
            </div>
          </a>
        </div>
        <div className="mobile-panel">
          <h2>{this.props.title}</h2>
          <p>{this.props.desc}</p>
        </div>
      </div>
    );
  }
}

export default Panel;
