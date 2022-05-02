import React from "react";
import "./App.css";
import ComponentA from "./ComponentA";
import ComponentB from './ComponentB';
import FetchData from "./FetchData";

const blogInfo = {
  React: {
    post: "Learn useContext Hooks",
    website: "w3schools.com",
  },
  GraphQL: {
    post: "Learn GraphQL Mutations",
    website: "w3schools.com",
  },
};

export const blogInfoContext = React.createContext(blogInfo);
function App() {
  
  return (
    <div className="App">
      <blogInfoContext.Provider value={blogInfo}>
        <h1>React context </h1>
        <ComponentA></ComponentA>
        <ComponentB></ComponentB>
      </blogInfoContext.Provider>
      <FetchData></FetchData>
    </div>
  );
}

export default App;
