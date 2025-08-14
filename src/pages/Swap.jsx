

import WormholeConnect, {
  config,
  // WormholeConnectTheme,
} from "@wormhole-foundation/wormhole-connect";

function WormholeSwap({ chain, network }) {
  // Map the selected chain/network to Wormhole configuration
  const getWormholeChains = (selectedChain) => {
    const chainMapping = {
      'ethereum': 'Ethereum',
      'polygon': 'Polygon', 
      'avalanche': 'Avalanche',
      'bsc': 'BSC',
      'fantom': 'Fantom',
      'sui': 'Sui'
    };
    
    // Use selected chain or default to Sui and Avalanche
    const mappedChain = chainMapping[selectedChain] || 'Sui';
    return [mappedChain, 'Avalanche']; // Always include Avalanche as second option
  };

  const getWormholeNetwork = (selectedNetwork) => {
    return selectedNetwork === 'mainnet' ? 'Mainnet' : 'Testnet';
  };

  const config = {
    // Define the network based on selection
    network: getWormholeNetwork(network),
    
    // Define the chains based on selection
    chains: getWormholeChains(chain),
    
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

export default WormholeSwap;