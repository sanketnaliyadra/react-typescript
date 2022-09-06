import React from 'react'
import Profile from './components/Profile'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Status from './components/Status'
import Button from './components/Button'
import Container from './components/Container'

const App = () => {
  const personData = {
    fname: "rohan",
    lname: "patel"
  }

  const personList = [
    {
      name: "john",
      age: 20
    },
    {
      name: "meet",
      age: 25
    },
    {
      name: "king",
      age: 28
    }
  ]
  return (
    <div>
      <Profile name='john' count={23}/>
      <Person data={personData}/>
      <PersonList personList={personList}/>
      <Status status='errors'/>
      <Button handleClick={() => alert("hey folks")}/>
      <Container style={{border: '1px solid black', padding: '1rem'}}/>
    </div>
  )
}

export default App