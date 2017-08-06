import {UPDATE_PIXEL_VALUE, SET_ACTIVE_COLOR} from '../actions'

const initialState = {activeColor:'rgb(255,255,255)'}

export default function colorReducer(state=initialState, action){
  switch(action.type){
    case UPDATE_PIXEL_VALUE:
      return action.payload
    case SET_ACTIVE_COLOR:{
      const newState = {...state}
      newState.activeColor = action.payload
      return newState}
    default:
      return state
  }
}
