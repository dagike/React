import React from "react";
import useResources from "./useResources";

export default ({ resource }) => {
  const resources = useResources(resource);

  return (
    <ul>
      {resources.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};
