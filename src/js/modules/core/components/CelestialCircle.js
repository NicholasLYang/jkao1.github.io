import React from "react";
import injectSheet from "react-jss";

const styles = {
  CelestialCircle: {
    background: "#fff000",
    borderRadius: "6vw",
    height: "3vw",
    left: "30vw",
    position: "absolute",
    top: "15vh",
    width: "3vw",
    zIndex: 50,
  },
  explainer: {
    left: "4vw",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    whiteSpace: "nowrap",
  }
};

class CelestialCircle extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isCaptionVisible: false,
    };
  }

  handleMouseEnter = () => {
    this.props.hideContent();
    this.setState({ isCaptionVisible: true });
  }

  handleMouseLeave = () => {
    this.props.showContent();
    this.setState({ isCaptionVisible: false });
  }

  render() {
    const celestialObject = Math.abs((new Date()).getHours() - 12) < 6 ? "sun" : "moon";
    return (
      <div className={classes.CelestialCircle} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
      {this.state.isCaptionVisible && (
        <div className={classes.explainer}>
          The arc of the {celestialObject} at my location
        </div>
      )}        
      </div>
    );
  }
}

export default injectSheet(styles)(CelestialCircle);
