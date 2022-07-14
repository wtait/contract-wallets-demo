import React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import {ButtonGroup} from "@mui/material";
import IconButton from "@mui/joy/IconButton";
import Fingerprint from '@mui/icons-material/Fingerprint';
import '@rainbow-me/rainbowkit/dist/index.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { rainbow } from "@rainbow-me/rainbowkit/dist/wallets/walletConnectors/rainbow/rainbow";

const { chains, provider } = configureChains(
   [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
   [
     alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }),
     publicProvider()
   ]
 );
 
 const { connectors } = getDefaultWallets({
   appName: 'My RainbowKit App',
   chains
 });
 
 const wagmiClient = createClient({
   autoConnect: true,
   connectors,
   provider
 })

const Account = () => 

<WagmiConfig client={wagmiClient}>
<RainbowKitProvider chains={chains} theme={darkTheme()}>
   <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
      <ConnectButton/>
   </Box>
</RainbowKitProvider>
</WagmiConfig>



export default Account;