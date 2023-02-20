import React, { useContext } from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { useState } from 'react';
import Layout from '../components/Layout';
import AppContext from './context';
import '@fortawesome/fontawesome-svg-core/styles.css';
import initFontAwesome from '../utils/initFontAwesome';
import '../styles/globals.css';

initFontAwesome();

export default function App({ Component, pageProps }) {
  const [web3_, setWeb3] = useState(null)
  const [address, setAddress] = useState(null)
  const [vmContract, setVmContract] = useState(null)

  return (
    <AppContext.Provider value={{ web3_, setWeb3, address, setAddress, vmContract, setVmContract }}>
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </AppContext.Provider>
  );
}
