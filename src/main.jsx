import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './components/Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <div className='h-16 w-1/2  relative bottom-12 bg-white z-20'></div>
    <div class="w-0 h-0 border-b-[90px] border-b-transparent border-l-[90px] border-white relative m-auto  bottom-[94px] z-20 rotate-45"></div>

    <h1>Helo</h1>

    <Card />
  </StrictMode>,
)
