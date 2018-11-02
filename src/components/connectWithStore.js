import React from 'react'
import { connect } from 'react-redux'
import {store} from '../state/createStore'

const connectWithStore = (mapStateToProps = null, mapDispatchToProps = null, mergeProps = null) => WrappedComponent => {
  const ConnectedWrappedComponent = connect(mapStateToProps, mapDispatchToProps, mergeProps)(WrappedComponent)
  return props => <ConnectedWrappedComponent {...props} store={store} />
}

export default connectWithStore
