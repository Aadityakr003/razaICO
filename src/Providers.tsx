import React from 'react'
import { Provider } from 'react-redux'
import { RefreshContextProvider } from './contexts/RefreshContext'
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from "@ethersproject/providers";
import { configureStore } from './state';

const store = configureStore(undefined);
function getLibrary(provider : any) {
  return new Web3Provider(provider);
}

const Providers = ( children : any) => {


  return (

    <Provider store={store}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <RefreshContextProvider>{children}</RefreshContextProvider>
      </Web3ReactProvider>

    </Provider>

  )
}

export default Providers