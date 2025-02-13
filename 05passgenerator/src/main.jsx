import { StrictMode , useState} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Switch from './Switch'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Switch />

  </StrictMode>,
)
