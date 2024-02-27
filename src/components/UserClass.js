import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "Dummy",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(
      "https://proxy.cors.sh/https://api.github.com/users/mary-metilda"
    );
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="flex flex-col items-center justify-normal m-4 p-4 bg-pink-100 sm:bg-yellow-100 md:bg-blue-100 lg:bg-green-100 shadow-2xl">
        <img className="w-32 h-32 rounded-full" src={avatar_url} alt="avatar" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: metilda0496@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
