import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Toaster } from "react-hot-toast";
// import { MetaMaskProvider } from "@metamask/sdk-react";
import {EthWalletProvider} from "./utils/walletProvider"
import { Web3ModalProvider } from "./hooks/web3Provider";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{
                margin: "8px",
            }}
            toastOptions={{
                success: {
                    duration: 3000,
                },
                error: {
                    duration: 5000,
                },
                style: {
                    fontSize: "16px",
                    maxWidth: "600px",
                    padding: "16px 24px",
                    backgroundColor: "#fff",
                    color: "#374151",
                },
            }}
        />
        <Web3ModalProvider>
        <EthWalletProvider
         
        >
            <App />
        </EthWalletProvider>
        </Web3ModalProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
