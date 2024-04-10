import { useEffect, useState, useRef } from "react";
import Web3 from "web3";
import getRpcUrl from "../utils/getRpcUrl";
import { useWeb3React as useWeb3ReactCore } from "@web3-react/core";
import { provider as ProviderType } from "web3-core";
const RPC_URL = getRpcUrl();
const httpProvider = new Web3.providers.HttpProvider(RPC_URL);

/**
 * Provides a web3 instance using the provider provided by useWallet
 * with a fallback of an httpProver
 * Recreate web3 instance only if the ethereum provider change
 */
const useWeb3 = () => {
    // const { ethereum }: { ethereum: ProviderType } = window.ethereum;
    // const refEth = useRef(ethereum);
    const [web3, setweb3] = useState(new Web3(httpProvider));
    useEffect(() => {
        // if (ethereum !== refEth.current) {
        // setweb3(new Web3(httpProvider));
        // refEth.current = ethereum;
        // }
    }, []);
    return web3;
};

export function useActiveWeb3React() {
    const context = useWeb3ReactCore();
    return context;
}

export default useWeb3;
