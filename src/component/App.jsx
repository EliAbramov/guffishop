import React , {useEffect, useState} from 'react'
import Body from './Body'
import {Provider} from './ContextAPI'
import '../App.css'

export default function App() {

  const student = { name: "Nati", age: 22}

  const [users, setUsers] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json))
  })



  return (
    <div>
      <h1>Final</h1>

      {users.map((user)=>{
        return (
          <div>
            <h2>{user.name}</h2>
            <p>City: {user.address.city}</p>
            <p>Contact me: {user.email}</p>
            <br />
          </div>
        )
      })}



      <Provider value={student}>
        <Body />
      </Provider>

      
    </div>
  )
}
