import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

const NavBar = () => (
  <div className="navbar">
    <h3>Task Manager</h3>
    <Link to="/">Current Tasks</Link>
    <Link to="/completed">Completed Tasks</Link>
  </div>
);

const Template = (props) => (
  <div>
    <NavBar />
    <p className="page-info">
      {props.title}:
    </p>
    <img src="https://i.imgur.com/Kbkqr2n.png" alt="test" />
    <ul className={props.status}>
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
    </ul>
  </div>
);

const CurrentTasks = () => (
  <Template title="Current Tasks" status="Current"/>
);

const Landing = () =>  {
  console.log("-----test----",window.location.href);
  return (
    <Template title="Current Tasks" status="Current"/>
  )
}

const CompletedTasks = () => (
  <Template title="Completed Tasks" status="Completed"/>
);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/token/:tokenId" component={Landing}/>          
          <Route path="/completed" component={CompletedTasks}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;