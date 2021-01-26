import React from 'react';
import "./App.css";
import styled from 'styled-components'
import Input from './components/screens/Input'
import Nav from './components/screens/Nav'
import New from './components/screens/New'
import UseState from './components/screens/UseState'
import Counter from './components/screens/Counter'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import About from './components/screens/About'
import Contact from './components/screens/Contact'

class App extends React.Component {
  render() {
    return (
      <>
          <Nav />
          <Router>
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
          </Router>
        <div className="one">
          <h1>welcome</h1>
          <Cover>lorem ipsum dolor sit amet</Cover>
          <Cover>lorem ipsum dolor sit amet lorem ipsum dolor sit amet</Cover>
        </div>
        <div className="two">
          <Input />
          <Input />
          <Input />
        </div>
        <UseState />
        <New />
        <Counter />
      </>
    );
  }

}
const Cover = styled.p`
  color: red;
`;
export default App;