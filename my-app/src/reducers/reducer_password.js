import {INPUT_PASSWORD} from '../actions'

export default function passwordReducer(state = {}, action){
  switch (action.type) {
    case INPUT_PASSWORD:
      localStorage.auth = action.payload.password
      return action.payload;
      default: return state;
  }
}
