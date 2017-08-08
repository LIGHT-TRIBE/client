import io from 'socket.io-client';

const socket = io('https://constellation.herokuapp.com/' || 'http://localhost:3000');

export default socket
