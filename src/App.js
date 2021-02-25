import React from 'react';
import PizzaForm from "./components/PizzaForm";

import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>Order your Pizza</h1>
        <PizzaForm></PizzaForm>
      </div>
    );
  }
}

export default App;
