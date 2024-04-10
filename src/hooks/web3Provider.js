import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/react";

const projectId = process.env.REACT_APP_WALLET_CONNECT_PROJECTID;
// const projectId = "9b0664ea0eac495d56e04ad3220c7835";

const cryptoData = {
  mainnet: [
    {
      label: "BNB",
      symbol: "BNB",
      name: "BNB",

      type: "BNB",
      chainId: 56,

      rpcUrl: "https://bsc-dataseed.binance.org/",
      explorerLink: "https://bscscan.com/",
    },
  ],
  testnet: [
    {
      label: "BNB",
      symbol: "BNB",
      type: "BNB",

      name: "BNB",
      currency: "BNB",
      chainId: 97,

      rpcUrl: "https://bsc-testnet.publicnode.com/",
      explorerLink: "https://testnet.bscscan.com/",
    },
    {
      chainId: 1,
      name: "Ethereum",
      currency: "ETH",
      explorerUrl: "https://etherscan.io",
      rpcUrl: "https://cloudflare-eth.com",
    },
  ],
};
// 3. Create modal
const metadata = {
  name: "Kai Chain",
  description: "Kai Chain Platform",
  url: "https://kaichain.net/",
  icons: ["https://avatars.mywebsite.com/"],
};

const mainnet = {
  chainId: 1,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: "https://cloudflare-eth.com",
};
createWeb3Modal({
  ethersConfig: { ...defaultConfig({ metadata }) },

  chains: cryptoData["testnet"],
  defaultChain: 1,
  projectId,
});
export function Web3ModalProvider({ children }) {
  return children;
}
