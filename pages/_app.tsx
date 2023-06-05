import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { publicProvider } from 'wagmi/providers/public';
import { connectorsForWallets, darkTheme, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import {
  injectedWallet,
  metaMaskWallet
} from '@rainbow-me/rainbowkit/wallets';

import '@rainbow-me/rainbowkit/styles.css';
import { UserProvider } from 'context/UserContext';

export const mantle = {
  id: 5001,
  name: 'Mantle Testnet',
  network: 'mantle',
  nativeCurrency: {
    decimals: 18,
    name: 'Mantle',
    symbol: 'BIT',
  },
  rpcUrls: {
    public: { http: ['https://rpc.testnet.mantle.xyz'] },
    default: { http: ['https://rpc.testnet.mantle.xyz'] },
  },
  blockExplorers: {
    default: { name: 'SnowTrace', url: 'https://snowtrace.io' },
  },
  contracts: {
  },
};

const { chains, provider } = configureChains(
  [mantle],
  [
    // alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

// const { connectors } = getDefaultWallets({
//   appName: 'ETHPorto',
//   chains
// });

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      injectedWallet({ chains }),
      metaMaskWallet({ chains })
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider modalSize='compact' chains={chains} theme={darkTheme({
        accentColor: '#1C4532',
        accentColorForeground: 'white',
        borderRadius: 'small',
        fontStack: 'system',
        overlayBlur: 'small',
      })}>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );

}

export default MyApp;
