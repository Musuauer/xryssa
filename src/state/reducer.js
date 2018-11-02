// const initialState = {
//   german: false
// }

const TOGGLE_LANGUAGE = 'TOGGLE_LANGUAGE'
export const toggleLanguage = () => ({ type: TOGGLE_LANGUAGE })

export const languagesReducer = (state = {}, action) => {
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
