import Web3 from 'web3'
import getRpcUrl from '../utils/getRpcUrl'

const RPC_URL = getRpcUrl()
console.log(RPC_URL);
const httpProvider = new Web3.providers.HttpProvider(RPC_URL)
const web3NoAccount = new Web3(httpProvider)

const getWeb3NoAccount = () => {
  return web3NoAccount
}

const getWeb3 = () =>{
    const web3 = new Web3(httpProvider);
    return web3;
}

const getContract = (abi : any, address : string) => {
    const web3 = getWeb3()
    return new web3.eth.Contract(abi, address)
}

export { getWeb3, getContract, httpProvider }
export { getWeb3NoAccount }
export default web3NoAccount