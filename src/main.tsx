import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BemVindo from './BemVindo'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
    <BemVindo/>
  </StrictMode>,
)