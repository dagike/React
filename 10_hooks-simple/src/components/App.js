import React, { Component } from "react";
import ResourceList from "./ResourceList";

class App extends Component {
  state = { resource: "posts" };

  render() {
    return (
      <div className="ui container">
        <button
          onClick={() => this.setState({ resource: "posts" })}
          className="ui button primary"
        >
          Posts
        </button>
        <button
          onClick={() => this.setState({ resource: "todos" })}
          className="ui button primary"
        >
          Todos
        </button>
        <ResourceList />
      </div>
    );
  }
}

export default App;
