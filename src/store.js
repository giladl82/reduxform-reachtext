import { createStore, combineReducers, compose } from 'redux'
import reducers from './reducers'

const configureStore = (preloadedState) => {
  // Using compose for redux devtools
  return createStore(
    combineReducers({
      form: reducers.form
    }),
    preloadedState,
    compose(
      typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
    ))
}

export default configureStore