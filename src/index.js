import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BookStoreContext } from './context/BookStoreContext'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <BookStoreContext>
      <App />
    </BookStoreContext>
  </React.StrictMode>,
  document.getElementById('root')
)
