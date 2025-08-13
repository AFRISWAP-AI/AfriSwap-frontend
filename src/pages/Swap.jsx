import WormholeConnect, {
  config,
  // WormholeConnectTheme,
} from "@wormhole-foundation/wormhole-connect";

function Swap() {
  const config = {
    // Define the network
    network: "Testnet",

    // Define the chains
    chains: ["Sui", "Avalanche"],

    // rpcs: {
    // 	Solana: 'https://mainnet.helius-rpc.com/?api-key=KEY'
    // },
    // UI configuration
    ui: {
      title: "ETH Enugu AfriSwap AI",
    },
  };

  const theme = {
    mode: "dark",
    primary: "#78c4b6",
  };

  return <WormholeConnect config={config} theme={theme} />;
}

export default Swap;
