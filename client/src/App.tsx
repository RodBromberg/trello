import { useState } from 'react'
import { AppContainer, ColumnContainer, ColumnTitle, CardContainer } from './styles/styles'
import './App.css'
import { Card } from 'react-bootstrap'
import { Column, Parent } from './Column'

function App() {
  return (
    <div className="App">
      <Column text={'text'}/>
      <Parent name={'name'}>Parent</Parent>
    </div>
  )
}

export default App
