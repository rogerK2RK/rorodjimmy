import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import MyRouter from './MyRouter.jsx'
// import { AuthProvider } from './context/axioContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <AuthProvider> */}
      <MyRouter />
    {/* </AuthProvider> */}
  </BrowserRouter>,
)
