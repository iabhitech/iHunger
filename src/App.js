import { Component } from "react";
import Main from "./components/MainComponent";

class App extends Component {
  render() {
    return <Main />;
  }
}

export default App;

/* 
Types of component in React:
1. Presentaional Components: only render the html.
2. Container Components: container logics, states etc.

Implementing components in React:
1. Class Component: using class, has state, hooks etc.
2. Functional Component: using function, only has props.
*/
