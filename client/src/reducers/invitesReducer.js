const initialState = {
  invites: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    // add actions here
    case 'GET_INVITES':
      return {...state, invites: action.invites}
    default:
      return state
  }
}