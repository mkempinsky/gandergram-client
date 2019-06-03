import React from "react";
import axios from "axios";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      token: JSON.parse(localStorage["appState"]).user.auth_token,
      user: "",
      photos: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://gandergramapi.test/api/photos/popular?token=${this.state.token}`)
      .then(response => {
        console.log(response);
        return response;
      })
      .then(json => {
        if (json.data.success) {
          console.log(json.data.photos);
          this.setState({ user: json.data.user, photos: json.data.photos });
          //alert("Login Successful!");
        } else alert("Login Failed!");
      })
      .catch(error => {
        alert(`An Error Occured! ${error}`);
      });
  }

  render() {
    return (
      <div className="text-center">
        <h2>Welcome Home</h2>
        <p>List of all users on the system</p>
        <div>
          <p>Name: {this.state.user.name}</p>
          <p>Email: {this.state.user.email}</p>
        </div>
        <ul>
          {this.state.photos.map((photo, i) => (
            <ol
              style={{
                padding: 15,
                border: "1px solid #cccccc",
                width: 250,
                textAlign: "left",
                marginBottom: 15,
                marginLeft: "auto",
                marginRight: "auto"
              }}
              key={i}
            >
              <p><img src={photo.urls.thumb} /></p>
            </ol>
          ))}
        </ul>
        <button
          style={{ padding: 10, backgroundColor: "red", color: "white" }}
          onClick={this.props.logoutUser}
        >
          Logout
        </button>
      </div>
    );
  }
}
