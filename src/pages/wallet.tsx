import Layout from "src/components/Layout";
import { TypographyH1 } from "src/components/common/TypographyH1";
import { TypographyP } from "src/components/common/TypographyP";
import { Button } from "src/components/ui/button";
import {
  ConnectorNotFoundError,
  WagmiConfig,
  configureChains,
  createConfig,
  mainnet,
  useAccount,
  useConnect,
  useDisconnect,
  useSignMessage,
} from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { InjectedConnector } from "wagmi/connectors/injected";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [
    alchemyProvider({ apiKey: "0GV-yub277rVVz2KEZGGW3rXuaNtoOL3" }),
    publicProvider(),
  ]
);

const config = createConfig({
  autoConnect: false,
  connectors: [new MetaMaskConnector({ chains })],
  publicClient,
  webSocketPublicClient,
});

const WalletInfo = () => {
  const { address, isConnected } = useAccount();
  const { connect, isLoading, error } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  const onSignMessageError = (error: Error) => {
    if (error.name === ConnectorNotFoundError.name) {
      connect();
    }
  };

  const {
    data,
    isError,
    isSuccess,
    signMessage,
    error: signMessageError,
  } = useSignMessage({
    message: "gm wagmi frens",
    onError: onSignMessageError,
  });

  const onConnectClick = () => {
    connect();
  };

  const onDisConnectClick = () => {
    disconnect();
  };

  return (
    <>
      <TypographyP>✴️ My address is: {address ? address : ""}</TypographyP>
      <TypographyP>
        Status: {isConnected ? "Connected ✅" : "Not connected ❌"}
      </TypographyP>

      <div className="flex justify-evenly">
        <Button
          variant="outline"
          onClick={onConnectClick}
          disabled={isConnected}
        >
          Connect
        </Button>

        <Button
          variant="outline"
          onClick={onDisConnectClick}
          disabled={!isConnected}
        >
          Disconnect
        </Button>
      </div>
      {error && <span>{error.message}</span>}

      <button
        disabled={isLoading}
        onClick={() => {
          signMessage();
        }}
      >
        Sign message
      </button>
      {isSuccess && <div>Signature: {data}</div>}
      {isError && signMessageError && <div>Error: {signMessageError.name}</div>}
    </>
  );
};

const WalletPage = () => {
  return (
    <WagmiConfig config={config}>
      <Layout>
        <TypographyH1>My Wallet</TypographyH1>
        <WalletInfo />
      </Layout>
    </WagmiConfig>
  );
};

export default WalletPage;
