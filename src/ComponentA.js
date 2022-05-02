import React,{useContext} from "react";
import {blogInfoContext} from './App'

function ComponentA() {
  const blogDetails = useContext(blogInfoContext);

  return (
    <div>
      <h3>React Blog Details</h3>
      <p>Topic: {blogDetails.React.post}</p>
      <p>Website:{blogDetails.React.website}</p>
    </div>
  );
}

export default ComponentA;