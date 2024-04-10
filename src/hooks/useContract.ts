import useWeb3, { useActiveWeb3React } from "./useWeb3";
import { useMemo } from "react";
//import { getMarketplaceContract, getBep20Contract } from '../utils/contractHelper';
import { getContract } from "../utils/contract";
import Web3 from "web3";
import getRpcUrl from "../utils/getRpcUrl";
const RPC_URL = getRpcUrl();
const httpProvider = new Web3.providers.HttpProvider(RPC_URL);

// export const useBep20Contract = (address) => {
//     const web3 = useWeb3();
//     return useMemo(()=>getBep20Contract(address, web3), [address, web3])
// }

// export const useMarketplaceContract = (address) => {
//     const web3 = useWeb3();
//     return useMemo(()=>getMarketplaceContract(address, web3), [address])
// }

export const useContract = (
    address: string,
    ABI: any,
    withSignerIfPossible = true
) => {
    const newWeb3 = useWeb3();

    const contract = new newWeb3.eth.Contract(ABI, address);
    return contract;

    // const {library, account} = useActiveWeb3React();
    // console.log(library, account,'curr lib and curr acccount');

    // return useMemo(() => {
    //   if (!address || !ABI || !library) return null;

    //   try {
    //     return getContract(
    //       address,
    //       ABI,
    //       library,
    //       withSignerIfPossible && account ? account : '',
    //     );
    //   } catch (error) {
    //     console.error('Failed to get contract', error);
    //     return null;
    //   }
    // }, [address, ABI, library, withSignerIfPossible, account]);
};
