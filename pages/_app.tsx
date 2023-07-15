import '@/styles/globals.css'
import { ThirdwebProvider, metamaskWallet, coinbaseWallet, walletConnect, safeWallet } from "@thirdweb-dev/react";
import type { AppProps } from 'next/app'

// const activeChain = "5ireChain";
const activeChain = {
  chainId: 997,
  rpc: ["https://rpc-testnet.5ire.network"],
  nativeCurrency: {
    decimals: 18,
    name: "5ireChain",
    symbol: "5ire",
  },
  shortName: "5ireChain",
  slug: "5ireChain",
  testnet: true,
  chain: "5ireChain",
  name: "5ire",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain} supportedWallets={[metamaskWallet(), coinbaseWallet(), walletConnect(), safeWallet()]}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}
