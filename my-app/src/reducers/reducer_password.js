import {INPUT_PASSWORD} from '../actions'

export default function passwordReducer(state = {}, action){
  switch (action.type) {
    case INPUT_PASSWORD:
    console.log(action);
      localStorage.auth = action.payload.message
      return action.payload;
      default: return state;
  }
}
