import React,{useContext} from "react";
import {blogInfoContext} from './App'

function ComponentB() {
  const blogDetails = useContext(blogInfoContext);

  return (
    <div>
      <h3>GraphQL Blog Details</h3>
      <p>Topic: {blogDetails.GraphQL.post}</p>
      <p>Website:{blogDetails.GraphQL.website}</p>
    </div>
  );
}

export default ComponentB;