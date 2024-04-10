import web3NoAccount from '../utils/web3'

const getContract = (abi : any, address : string, web3 : any) => {
    const _web3 = web3 ?? web3NoAccount
    return new _web3.eth.Contract(abi, address)
}

// export const getBep20Contract = (address : string, web3 : any) => {
//     return getContract(Bep20ABI, address, web3);
// }




