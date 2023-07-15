import '@/styles/globals.css'
import { ThirdwebProvider, metamaskWallet, coinbaseWallet, walletConnect, safeWallet } from "@thirdweb-dev/react";
import type { AppProps } from 'next/app'

// const activeChain = "polygon-zkevm-testnet";
const activeChain = {
  chainId: 1001,
  rpc: ["https://rpc-test.d11k.dojima.network:8546/"],
  nativeCurrency: {
    decimals: 18,
    name: "Dojima-Chain",
    symbol: "DOJ",
  },
  shortName: "Dojima-Chain",
  slug: "Dojima-Chain",
  testnet: true,
  chain: "Dojima-Chain",
  name: "Dojima Chain",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain} supportedWallets={[metamaskWallet(), coinbaseWallet(), walletConnect(), safeWallet()]}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}
