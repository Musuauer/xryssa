/* eslint no-underscore-dangle: 0 */

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { languagesReducer } from './reducer'

// const devtools =
//     process.env.NODE_ENV === 'development' && window.devToolsExtension
//       ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
//         window.__REDUX_DEVTOOLS_EXTENSION__()
//       : f => f

const middleware = applyMiddleware(thunk)

export const store = createStore(languagesReducer, middleware)
