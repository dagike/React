import { useState, useEffect } from "react";
import jsonPlaceholder from "../api/jsonPlaceholder";

export default resource => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async resource => {
      const res = await jsonPlaceholder.get(`/${resource}`);
      setResources(res.data);
    })(resource);
  }, [resource]);

  return resources;
};
