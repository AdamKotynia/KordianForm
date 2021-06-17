import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')
  const [users, setUsers] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        {users.map(elem => {
          return (
            <div className="user">
              <div>{elem.name}</div>
              <div>{elem.pass}</div>
            </div>
          )
        })}
        <div>
          <input type="text" value={name} onChange={(e) => {
            setName(e.target.value)
          }} />
          <input type="password" value={pass} onChange={(e) => {
            setPass(e.target.value)
          }} />
          <button onClick={() => {
            setUsers(prevState => {
              return [...prevState, {
                name: name,
                pass: pass
              }]
            })
            alert('user added');
            setName('');
            setPass('');
          }}>Kliknij</button>

        </div>
          
      </header>
    </div>
  );
}

export default App;
