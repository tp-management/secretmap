import io from 'socket.io-client';

const socket = io( process.env.REACT_APP_SERVER, {transports: ['websocket', 'polling', 'flashsocket']});

export default socket;