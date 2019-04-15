import React, { useState, useEffect } from "react";
import jsonPlaceholder from "../api/jsonPlaceholder";

const useResources = resource => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async resource => {
      const res = await jsonPlaceholder.get(`/${resource}`);
      setResources(res.data);
    })(resource);
  }, [resource]);

  return resources;
};

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
