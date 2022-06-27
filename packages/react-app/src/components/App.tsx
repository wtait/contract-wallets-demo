import React from "react";
import Account from "./Account";
import Wallet from "./Wallet";
import WalletList from "./WalletList";
import MessageList from "./MessageList";


const App = () => {
  return (
    <div>
      <Account />
      <Wallet />
      <WalletList />
      <MessageList />
    </div>
  );
};

export default App;
