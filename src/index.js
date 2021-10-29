import {StrictMode} from 'react'
import ReactDOM from 'react-dom'

import Buttons from './Buttons'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <StrictMode>
    <Buttons />
  </StrictMode>,
  rootElement,
)
