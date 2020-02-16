import React, { Component } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import SearchDialog from './Components/SearchDialog/SearchDialog'

export class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />        
        <SearchDialog />
      </div>
    )
  }
}

export default App

