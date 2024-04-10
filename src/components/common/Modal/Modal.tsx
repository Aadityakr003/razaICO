import React, { useEffect, useState } from "react";
import { useContract } from "../../../hooks/useContract";
import { ABI } from "../../../abi/abi";
import tokenABI from "../../../abi/tokenABI.json";
import toast from "react-hot-toast";
import "./modal.css";
import Select from "react-select";
import InstallMetamaskPopup from "./installMetamaskPopup";
// import { useSDK } from "@metamask/sdk-react";
import Web3 from "web3";
import useWallet from "../../../hooks/useWallet";
import { Contract, ethers } from "ethers";

// declare global {
//     interface Window {
//         ethereum: any;
//     }
// }

interface ModalProps {
    setIsOpen: (isOpen: boolean) => void;
    setLoadingOpen: (value: boolean) => void;
}

const curencyOptions = [
    {
        value: "USDT",
        label: (
            <div className="flex flex-row items-center justify-start">
                <img
                    src="/images/tusdt_icon.png"
                    alt="the"
                    className="h-5 w-5 mr-2 rounded-full"
                />{" "}
                USDT
            </div>
        ),
    },
];

const tokenOptions = [
    {
        value: "KEC",
        label: (
            <div className="flex flex-row items-center justify-start">
                <img
                    src="/images/kaichain.webp"
                    alt="the"
                    className="h-6 w-6 mr-2 rounded-full"
                />{" "}
                KEC
            </div>
        ),
    },
];

const customStyles = {
    control: (provided: any) => ({
        ...provided,
        background: "transparent",
        color: "white",
    }),
    menu: (provided: any) => ({
        ...provided,
        background: "#4B5563",
        color: "white",
    }),
    option: (provided: any, state: any) => ({
        ...provided,
        background: "#4B5563",
        color: "white",
        "&:hover": {
            background: "#718096",
        },
    }),
    singleValue: (provided: any) => ({
        ...provided,


        color: "white",
    }),
};

const Modal: React.FC<ModalProps> = ({ setIsOpen, setLoadingOpen }) => {
    const [currentAccount, setCurrentAccount] = useState<string | null>(null);
    const [selectedCurrency, setSelectedCurrency] = useState<string>("USDT");
    const [currencyValue, setCurrencyValue] = useState<string>("0");
    const [openCreateMetamask, setOpenCreateMetamask] = useState(false);
    const wallet = useWallet();

    const tusdAddress = process.env.REACT_APP_TUSD_ADDRESS;
    // const busdAddress = process.env.REACT_APP_BUSD_ADDRESS;
    const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

    const [tokenValue, setTokenValue] = useState(0);
    // const { ethereum } = window;

    const getConnectedAccount = async () => {
        // const accounts = await ethereum?.request({ method: "eth_accounts" });
        // if (accounts?.length) {
        //     setCurrentAccount(accounts[0]);
        // }
    };

    const connectWallet = async () => {
        try {
            (await wallet?.connect()) as any;
        
        } catch (err) {
            console.warn("failed to connect..", err);
        }
    };

   const getContract = () => {
    try {

         const PROVIDER = new ethers.providers.Web3Provider(
          wallet.provider as any,
           "any"
        );

        const SIGNER = PROVIDER.getSigner();
      let contract = new Contract(
        contractAddress as string,
        ABI,
         SIGNER
      );
      return contract;
    } catch (error) {
      console.log("error", error);
      return null;
    }
  };

   const getTokenContract = () => {
    try {

         const PROVIDER = new ethers.providers.Web3Provider(
          wallet.provider as any,
           "any"
        );

        const SIGNER = PROVIDER.getSigner();
      let contract = new Contract(
        tusdAddress as string,
        tokenABI,
         SIGNER
      );
      return contract;
    } catch (error) {
      console.log("error", error);
      return null;
    }
  };



//  const  checkAllowance = async () => {
//     return new Promise(async (resolve, reject) => {
//       try {
      
//           let tokenContract = getTokenContract();
//           let getBalance = await tokenContract?.balanceOf(wallet?.address);
//           let tokenDecimal = await tokenContract?.decimals();

//           getBalance = getBalance.toString() / 10 ** tokenDecimal;
//           if (Number(tokenAmount) > Number(getBalance)) {
//             return reject("Don't have enough token");
//           }

//           let tokenAllowence = await tokenContract.allowance(
//             wallet.account,
//             this.ICOContractDetails?.contractAddress
//           );

//           let getTotalSupply = await tokenContract.totalSupply();
//           let valueInWei =
//             getTotalSupply.toString() / 10 ** tokenDecimal;
//           if (Number(tokenAmount) > Number(valueInWei)) {
//             return reject("Don't have enough supply in pool");
//           }

//           // tokenAmount = parseInt(tokenAmount);
//           tokenAllowence = tokenAllowence.toString();
//           let tokenAmountWithDecimal = 0;

//           if (tokenDecimal == 18) {
//             tokenAmountWithDecimal = ethers.utils.parseUnits(
//               tokenAmount.toString(),
//               "ether"
//             );
//           } else {
//             tokenAmountWithDecimal = Number(tokenAmount) * 10 ** tokenDecimal;
//           }

//           if (Number(tokenAmountWithDecimal) > tokenAllowence) {
//             const txn = await tokenContract.approve(
//               this.ICOContractDetails?.contractAddress,
//               tokenAmountWithDecimal
//             );
//             await txn.wait();
//           }
//           resolve(true);
     
//       } catch (error) {
//         console.log(error, "<====err in allowance");
//         reject(error.reason || error.data?.message || error.message || error);
//       }
//     });
//   };


    // const newWeb3 = new Web3(wallet.provider as any);
    // const contract = new newWeb3.eth.Contract(ABI as any, contractAddress);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoadingOpen(true);
        try {

            if(!wallet.isActive) {return toast.error("Please connect Wallet!")}
                const contract = getContract();
               
if(!contract) return;

const tokenContract = getTokenContract();


 let valueInWei = ethers.utils.parseUnits(
              currencyValue.toString(),
              "ether"
            );

const txn = await tokenContract?.approve(
              contractAddress,
            valueInWei.toString(),
            );
            await txn.wait();

            // if (selectedCurrency === "BUSD") {
            //   const resp = await contract?.methods
            //     .buyTokens(Math.round(tokenValue), busdAddress)
            //     .send({ from: currentAccount });
            // } else if (selectedCurrency === "TUSD") {
            const resp = await contract?.buyPreSaleTokens(valueInWei.toString(),{
                gasLimit: "300000"
            });

            await resp.wait()

              
            // }
            toast.success("Token bought successfully");
            // setTimeout(() => {
            //     toast.success(
            //         `You will receive ${tokenValue} KECs 2 days after presale stage ends`
            //     );
            // }, 3000);
            setLoadingOpen(false);
            setIsOpen(false);
        } catch (error) {
            console.log(error, "<===err")
            setLoadingOpen(false);
            setIsOpen(false);
            toast.error("Error buying token");
        }
    };

    const getMultiplierForCurrentMonth = (): number => {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();

        switch (currentMonth) {
            case 3: // April
                return 0.015;
            case 4: // May
                return 0.02;
            case 5: // June
                return 0.03;
            default:
                return 0;
        }
    };

    const handleCurrencyValueChange = (e: any) => {
        setCurrencyValue(e.target.value);
        const multiplier = getMultiplierForCurrentMonth();
        setTokenValue((value) => e.target.value / multiplier);
    };

    const handleSelectedCurrencyChange = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setSelectedCurrency(e.target.value);
        setTokenValue(0);
        setCurrencyValue("0");
    };

    useEffect(() => {
        getConnectedAccount();
    }, [currentAccount]);

    return (
        <>
            <div className={"centered"}>
                <div className={"modal bg-[#000000]"}>
                    <div className={"modalHeader"}>
                        <h5 className={"heading"}>Buy the KEC</h5>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="modalContent gap-2">
                            {/* currency balance */}
                            <div className="flex justify-between py-4 items-start flex-col">
                                <div className="bg-gray-600 px-3 flex flex-row rounded-md w-full gap-3 py-2">
                                    <div className="w-[130px]">
                                        <Select
                                            onChange={() =>
                                                handleSelectedCurrencyChange
                                            }
                                            styles={customStyles}
                                            defaultValue={curencyOptions[0]}
                                            options={curencyOptions}
                                        />
                                    </div>

                                    <input
                                        type="number"
                                        id="currency"
                                        placeholder="input the value"
                                        className=" text-base w-[90px] text-gray-200  max-w-none min-w-0 py-2"
                                        value={currencyValue}
                                        onChange={(e) =>
                                            handleCurrencyValueChange(e)
                                        }
                                        required
                                    />
                                </div>
                            </div>

                            {/* kec balance */}
                            <div className="flex justify-between items-start flex-col">
                                <p className="text-white text-base flex-grow max-w-none min-w-0 py-2">
                                    Rate : {getMultiplierForCurrentMonth()}
                                </p>

                                <div className="bg-gray-600 px-3 flex flex-row rounded-md w-full gap-2 py-2">
                                    <div className="w-[130px]">
                                        <Select
                                            styles={customStyles}
                                            defaultValue={tokenOptions[0]}
                                            options={tokenOptions}
                                        />
                                    </div>

                                    <input
                                        type="number"
                                        id="token"
                                        className="text-base w-[90px] text-gray-200  max-w-none min-w-0 py-2"
                                        value={tokenValue}
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={"actionsContainer"}>
                            {wallet.isActive && (
                                <button
                                    type="submit"
                                    className={"walletBtn bg-[#fa8e13]"}
                                    disabled={!currencyValue || currencyValue =="0" ? true:false}
                                >
                                    Buy
                                </button>
                            )}
                        </div>
                    </form>
                    <div className={"walletActions"}>
                        <div className={"actionsContainer"}>
                            <button
                                onClick={connectWallet}
                                className={`walletBtn ${
                                    wallet.isActive
                                        ? " bg-[#006400]"
                                        : "bg-[#fa8e13]"
                                } rounded-full`}
                            >
                                {wallet.isActive
                                    ? "Wallet connected"
                                    : "Connect Wallet"}
                            </button>
                            <button
                                className={"cancelBtn"}
                                onClick={() => setIsOpen(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
                {openCreateMetamask && (
                    <InstallMetamaskPopup
                        setIsOpen={() => setOpenCreateMetamask(false)}
                    />
                )}
            </div>
        </>
    );
};

export default Modal;
