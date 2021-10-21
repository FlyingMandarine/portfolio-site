import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import achievementReducer from './reducers/achievementReducer'

import App from './App'
import './index.css'

const store = createStore(achievementReducer)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={ store }>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)