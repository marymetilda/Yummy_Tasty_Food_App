import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>My react project</h2>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({loggedInUser}) => <h1 className="font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <UserClass name={"Metilda (class)"} location={"Kerala (class)"} />
        <UserClass name={"Elon Musk"} location={"US"} />
      </div>
    );
  }
}

export default About;
