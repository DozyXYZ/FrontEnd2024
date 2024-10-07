// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <div className="App">
        <h1 className="black-box">Welcome to React Router</h1>
        <nav>
          <Link to={"/"}>Home </Link>
          <Link to={"about"}>About </Link>
          <Link to={"contact"}>Contact </Link>
        </nav>
        <Outlet />
      </div>
    </>
  );
}

export default App
