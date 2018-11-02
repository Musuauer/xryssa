import React from 'react'
import { Provider } from 'react-redux'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {languagesReducer} from './src/state/reducer'
// const devtools =
//     process.env.NODE_ENV === 'development' && window.devToolsExtension
//       ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
//         window.__REDUX_DEVTOOLS_EXTENSION__()
//       : f => f

const middleware = applyMiddleware(thunk)

export const store = createStore(languagesReducer, middleware)

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => <Provider store={store}>{element}</Provider>
