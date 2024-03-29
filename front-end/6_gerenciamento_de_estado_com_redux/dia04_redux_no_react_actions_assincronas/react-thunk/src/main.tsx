import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/index.ts'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={ store }>
    <App />
  </Provider>,
)
