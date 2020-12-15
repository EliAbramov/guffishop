import React , {useEffect, useState} from 'react'
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Body from './Body'
import Home from './Home'
import Gallary from './Gallary'
import About from './About'
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

      <Router>
        <Link to='/'><button>Home</button></Link>
        <Link to='/gallary'><button>Gallary</button></Link>
        <Link to='/about'><button>About</button></Link>
        <Switch>
          <Route exact path="/" component={()=>{return <Home />}} />
          <Route path="/gallary" component={()=>{return <Gallary />}} />
          <Route path="/about" component={()=>{return <About />}} />
        </Switch>
      </Router>


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
