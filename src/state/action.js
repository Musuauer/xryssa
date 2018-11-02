export const TOGGLE_LANGUAGE = 'TOGGLE_LANGUAGE'

// export const toggleLanguage = ({ type: TOGGLE_LANGUAGE })

function toggleLanguage () {
  return {
    type: TOGGLE_LANGUAGE
  }
}

export function handleToggle () {
  return (dispatch) => {
    dispatch(toggleLanguage())
  }
}
