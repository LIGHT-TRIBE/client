import { combineReducers } from 'redux'
import colorReducer from './reducer_color'
import socketsReducer from './reducer_sockets'
import PERSIST from './persist'
import passwordReducer from './reducer_password'

const rootReducer = combineReducers({
  colorData: colorReducer,
  socketsData: socketsReducer,
  password: passwordReducer,
  persist: PERSIST
})

export default rootReducer
