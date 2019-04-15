import React, { useState, useEffect } from "react";
import jsonPlaceholder from "../api/jsonPlaceholder";

export default ({ resource }) => {
  const [resources, setResources] = useState([]);

  const getResource = async resource => {
    const res = await jsonPlaceholder.get(`/${resource}`);
    setResources(res.data);
  };

  useEffect(() => {
    getResource(resource);
  }, []);

  return <div>{resources.length}</div>;
};
