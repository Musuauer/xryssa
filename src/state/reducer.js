import { TOGGLE_LANGUAGE } from './action'

const initialState = {
  german: false
}

export const languagesReducer = (state = initialState, action) => {
  console.log('state:', state)
  const { type } = action
  switch (type) {
    case TOGGLE_LANGUAGE:
      return {
        ...state,
        german: !state.german
      }
    default:
      return state
  }
}
