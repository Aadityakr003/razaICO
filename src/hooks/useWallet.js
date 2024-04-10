import React from "react";

import { EthWalletContext } from "../utils/walletProvider";

export default function useWallet() {
  const context = React.useContext(EthWalletContext);

  if (context === undefined) {
    throw new Error(
      "useWallet hook must be used with a WalletProvider component"
    );
  }

  return context;
}
