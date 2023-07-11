import { configureChains, createConfig } from 'wagmi'
import { sepolia, polygonMumbai, goerli, arbitrumGoerli, optimismGoerli } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { getDefaultWallets, connectorsForWallets  } from '@rainbow-me/rainbowkit' 

export const { chains, publicClient } = configureChains(
  [sepolia,/* goerli, polygonMumbai, arbitrumGoerli, optimismGoerli */],
  [
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'WhitelistApp',
  projectId: '10572be452812a0d483a4ec33344be81',
  chains
});

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})