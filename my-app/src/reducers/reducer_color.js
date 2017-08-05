import {UPDATE_PIXEL_VALUE, SET_ACTIVE_COLOR, FETCH_PALETTE} from '../actions'
const initialState = {
  palette:{},
  activeColor:'rgb(255,255,255)'
}

export default function colorReducer(state=initialState, action){
  switch(action.type){
    case UPDATE_PIXEL_VALUE:
      return action.payload
    case SET_ACTIVE_COLOR:{
      const newState = {...state}
      newState.activeColor = action.payload
      return newState}
    case FETCH_PALETTE:{
      const newState = {...state}
      newState.palette = action.payload
      return newState}
    default:
      return state
  }
}
