import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card.js';
import Form from './components/Form.js';

function App() {
  const [people, setPeople] = useState([
    {name: "Chris", email: "christopher123@site.com", role: "Student"},
    {name: "Bob", email: "bobby456@site.com", role: "TL"},
  ]);
  return (
    <div className="App">
      {/* Do not break code from line 9 to line 23 */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* Do not break code from line 9 to line 23 */}
        <br></br>
          <Form />
          {people.map(person => <Card person={person} />)}
      </header>
    </div>
  );
}

export default App;
