import React from "react";
import Account from "./Account";
import Wallet from "./Wallet";
import WalletList from "./WalletList";
import MessageList from "./MessageList";
import Layout from "./Layout";
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import { GlobalStyles } from "@mui/styled-engine";

const App = () => {
  return (
    <CssVarsProvider disableTransitionOnChange>
      <GlobalStyles
        styles={() => ({
          body: {
            margin: 0,
            backgroundColor: "#FFDEA6"
          },
        })}
      />
      <Layout />
    </CssVarsProvider>
  );
};

export default App;
