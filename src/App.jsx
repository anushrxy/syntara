import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import NavBar from "./components/marginals/navbar/NavBar";
import Home from "./pages/Home";
import Seller from "./pages/Seller";
import Buyer from "./pages/Buyer";
import Footer from "./components/marginals/Footer/Footer";

import {
  WagmiConfig,
  createConfig,
  configureChains,
  Connector,
  useDisconnect,
  useAccount,
  useConnect,
} from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { mainnet, aurora } from "wagmi/chains";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

const { chains, publicClient } = configureChains(
  [aurora],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  connectors: [
    new MetaMaskConnector({
      chains,
      options: {
        UNSTABLE_shimOnConnectSelectAccount: true,
      },
    }),
  ],
});

const App = () => {
  return (
    <WagmiConfig config={config}> {/* Add the WagmiConfig wrapper */}
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seller" element={<Seller />} />
          <Route path="/buyer" element={<Buyer />} />
        </Routes>
        <Footer />
      </Router>
    </WagmiConfig>
  );
};

export default App;
