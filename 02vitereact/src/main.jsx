import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Mycomp from './components/Mycomp.jsx'

createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    <Mycomp />
  </>
 ,
)
