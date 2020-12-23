import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div style={{ alignItems: "center", margin: "50px 50px" }}>
          <img
            src={location.state.poster}
            alt={location.state.title}
            style={{ alignSelf: "center" }}
          />
          <h1>{location.state.title}</h1>
          <h3>{location.state.summary}</h3>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
