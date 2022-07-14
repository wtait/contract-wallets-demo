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
   <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        return (
          <div
            {...(!mounted && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!mounted || !account || !chain) {
                return (
                   <Button onClick={openConnectModal} variant="outlined" type="button" sx={{color:'black', borderColor:'black'}}>Connect Wallet</Button>
                );
              }

              if (chain.unsupported) {
                return (
                  <Button onClick={openConnectModal} variant="outlined" type="button" sx={{color:'black', borderColor:'black'}}>Wrong Network</Button>
                );
              }

              return (
                <div style={{ display: 'flex', gap: 12 }}>
                   
                  <Button 
                    onClick={openChainModal} 
                    variant="outlined" 
                    type="button" 
                    sx={{color:'black', borderColor:'black'}}>
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </Button>
                  
                  <Button onClick={openAccountModal} variant="outlined" type="button" sx={{color:'black', borderColor:'black'}}>
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </Button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
   </Box>
</RainbowKitProvider>
</WagmiConfig>



export default Account;