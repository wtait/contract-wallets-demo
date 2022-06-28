import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import Wallet from "../Wallet";

it('renders the account component', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);
    expect(div).toContainElement(Wallet)
    ReactDOM.unmountComponentAtNode(div);
})