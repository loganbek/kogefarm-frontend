import React from 'react'
import { isMobile } from 'react-device-detect'
import ReactDOM from 'react-dom'
import App from './App'
import Providers from './Providers'

// Temporary fix to #94
if(process.env.NODE_ENV !== "development" && isMobile){
  location.replace("https://m.kogefarm.io")
}

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root'),
)
