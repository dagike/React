import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./UserList";

export default () => {
  const [resource, setResource] = useState("posts");
  return (
    <div className="ui container">
      <UserList />
      <button
        onClick={() => setResource("posts")}
        className="ui button primary"
      >
        Posts
      </button>
      <button
        onClick={() => setResource("todos")}
        className="ui button primary"
      >
        Todos
      </button>
      <ResourceList resource={resource} />
    </div>
  );
};
