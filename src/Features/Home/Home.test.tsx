import Home from "./Home";
import { render } from '@testing-library/react';
import { Provider } from "react-redux";
import { store } from "../../store/store";
const io = require("socket.io-client");
const socket = io('ws://localhost:8082');

test('Check SignIn Card Rendered', () => {
    render(<Provider store={store}><Home socket={socket} user="dummy" /> </Provider>);
});