import { compose, createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import logger from 'redux-logger'
import reducers from './reducers'
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

//const socket = io('https://constellation.herokuapp.com/' || 'http://localhost:3000');
 const socket = io('http://localhost:3000');
const socketIoMiddleware = createSocketIoMiddleware(socket, "server/");
let Store = null

if (window.location.hostname === 'localhost'){
  Store = compose(
    applyMiddleware(promise, logger, socketIoMiddleware)
  )(createStore)(reducers)
} else {
  Store = compose(
    applyMiddleware(promise, socketIoMiddleware)
  )(createStore)(reducers)
}


export {Store, socket}
