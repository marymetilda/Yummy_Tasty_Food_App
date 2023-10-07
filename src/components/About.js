import { Component } from "react";

import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bg-pink-50 sm:bg-yellow-50 md:bg-blue-50 lg:bg-green-50 w-full min-h-[85vh] h-full flex flex-col items-center">
        <h1 className="font-bold font-serif text-2xl text-pink-950 sm:text-yellow-950 md:text-blue-950 lg:text-green-95">
          About
        </h1>
        <h2 className="text-pink-950 sm:text-yellow-950 md:text-blue-950 lg:text-green-950 text-lg font-semibold">
          My react project
        </h2>
        <div className="flex gap-2 text-pink-950 sm:text-yellow-950 md:text-blue-950 lg:text-green-950">
          <span>Logged-In User :</span>
          <span>
            <UserContext.Consumer>
              {({ loggedInUser }) => (
                <h1 className="font-bold">{loggedInUser}</h1>
              )}
            </UserContext.Consumer>
          </span>
        </div>
        <UserClass name={"Metilda (class)"} location={"Kerala (class)"} />
        <UserClass name={"Elon Musk"} location={"US"} />
      </div>
    );
  }
}

export default About;
