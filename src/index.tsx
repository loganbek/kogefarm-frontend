import React from 'react'
import { isMobile } from 'react-device-detect'
import ReactDOM from 'react-dom'
import App from './App'
import Providers from './Providers'

// Temporary fix to #94
if (isMobile && !/m.kogefarm.io/.test(window.location.href) && /kogefarm.io/.test(window.location.href)) {
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
