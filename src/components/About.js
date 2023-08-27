import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>My react project</h2>
        <UserClass name={"Metilda (class)"} location={"Kerala (class)"} />
        <UserClass name={"Elon Musk"} location={"US"} />
      </div>
    );
  }
}

export default About;
