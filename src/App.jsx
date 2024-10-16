import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const person = {
    name: "kiron",
    age: 20,
    profesion: "developer"

  }

  return (
    <>
      <h1>hello world</h1>
      <Person name="Mehefuj Ali" age="20" profesion="web developer"></Person>
      <Person name="rajib" age="20" profesion="web developer"></Person>
      <Person name="samim" age="20" profesion="web developer"></Person>
      <Person name="sumon" age="20" profesion="web developer"></Person>
      <Person person={{ name: "kiron", age: 20, profesion: "developer" }}></Person >
    </>
  )
}

function Person(person) {

  const personStyle = {
    border: '2px solid aqua',
    borderRadius: '6px',
    padding: '10px 30px',
    boxShadow: 'inset 0 0 10px'

  }
  return (
    <>
      <p className='person-info' style={personStyle}>I am a {person.name} and my age {person.age} i want to be a profesonal {person.profesion}</p>
    </>
  )
}

export default App
