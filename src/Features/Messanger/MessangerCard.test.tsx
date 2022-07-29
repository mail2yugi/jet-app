import MessangerCard from "./MessangerCard";
import { render } from '@testing-library/react';
import { Provider } from "react-redux";
import { store } from "../../store/store";
const io = require("socket.io-client");
const socket = io('ws://localhost:8082');

test('Check SignIn Card Rendered', () => {
    window.HTMLElement.prototype.scrollIntoView = function() {};
    render(<Provider store={store}><MessangerCard socket={socket} user="dummy" randomNumber={[]} room={null!} /> </Provider>);
});
