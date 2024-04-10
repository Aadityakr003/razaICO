import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  useWeb3Modal,
  useWeb3ModalAccount,
  useWeb3ModalProvider,
  useDisconnect,
  useWeb3ModalState,
} from "@web3modal/ethers5/react";

// import { toast } from "react-toastify";

import toast from "react-hot-toast";

export const EthWalletContext = React.createContext({
  isActive: false,
  address: null,
  balance: 0,
  chainId: 0,

  network: "",
  provider: null,
  connect: () => {},
  disconnect: () => {},
  toggleNetwork: () => {},
  loading: false,
});

/**
 * Description:- Here we creating context provider for wallet where we managing all actions for wallet like:-connect, disconnect,switchNetwork, address, balance etc
 * @param {any} {children}
 * @returns {any}
 */
export const EthWalletProvider = ({ children }) => {
  const { open } = useWeb3Modal();

  // console.log(useWeb3ModalAccount, "<====useWeb3ModalAccount");
  const accountHook = useWeb3ModalAccount();
  const state = useWeb3ModalState();

  const providerHook = useWeb3ModalProvider();
  const disconnectHook = useDisconnect();

  const [isActive, setIsActive] = useState(false);
  const [address, setaddress] = useState(null);

  // console.log(providerHook, "<====providerHook")

  useEffect(() => {
    setIsActive(accountHook?.isConnected);
    setaddress(accountHook?.address || "");
  }, [accountHook?.address, accountHook?.isConnected]);

  // useEffect(() => {
  //   if (providerHook?.walletProvider && isActive) {
  //     providerHook?.walletProvider?.on("disconnect", (res) => {
  //       disconnect();
  //     });
  //   }
  // }, [providerHook?.walletProvider, isActive]);

  useEffect(() => {
    try {
      if (accountHook.chainId && isActive) {
        if (accountHook.chainId != 97) {
          disconnect();
          toast.error(
            "This platform support only BNB. Please switch to that chain!"
          );
        }
      }
    } catch (error) {}
  }, [isActive, accountHook.chainId]);

  // console.log(state,accountHook, "<====state")
  const connect = useCallback(
    async (type) => {
      try {
        await open({ view: "Connect" });
      } catch (error) {
        console.log("error==> ", error);
      }
    },
    [open]
  );

  const disconnect = useCallback(async () => {
    try {
      setaddress(null);
      setIsActive(false);

      // console.log(disconnectHook, "<====disconnectHook");
      await disconnectHook.disconnect();
    } catch (error) {
      // console.log("error==> ", error);
    }
  }, [disconnectHook]);

  const values = useMemo(
    () => ({
      isActive,
      address,
      setaddress,
      connect,
      disconnect,

      provider: providerHook?.walletProvider || null,
      chainId: accountHook.chainId || 0,

      loading: state.open,
    }),
    [
      isActive,
      address,
      setaddress,
      connect,
      disconnect,

      providerHook,

      accountHook,
      state.open,
    ]
  );

  return (
    <EthWalletContext.Provider value={values}>
      {children}
    </EthWalletContext.Provider>
  );
};
