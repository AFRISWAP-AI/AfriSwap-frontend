# Web3 Token Swap Website

A complete React-based Web3 token swapping website with chain/network selection, built for hackathon requirements.

## 🚀 Features

- **Multi-page Navigation**: Home, About, Chain Selection, and Swap pages
- **Chain/Network Selection**: Searchable dropdowns for blockchain selection
- **Responsive Design**: Mobile-friendly interface with modern UI
- **Custom Routing**: Built-in navigation system without external dependencies
- **Mock Wallet Integration**: Connect wallet functionality (ready for real integration)
- **Modular Architecture**: Clean, maintainable code structure

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx                 # Fixed navigation header
│   ├── ConnectWalletButton.jsx    # Wallet connection component
│   ├── ChainNetworkForm.jsx       # Chain/network selection form
│   └── SearchableSelect.jsx       # Dropdown with search functionality
├── pages/
│   ├── Home.jsx                   # Landing page with hero section
│   ├── About.jsx                  # About page with features
│   ├── SelectChainNetwork.jsx     # Chain/network selection page
│   └── Swap.jsx                   # Swap page (integration point)
├── data/
│   └── chains.js                  # Chain and network data
├── hooks/
│   └── useRouter.js               # Custom routing hook
├── App.jsx                        # Main application component
└── index.js                       # Application entry point
```

## 🛠️ Installation & Setup

1. **Clone/Download the project files**

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open http://localhost:3000** in your browser

## 🔄 User Flow

1. **Home Page** → User lands on hero section with "Get Started" button
2. **Chain Selection** → User selects blockchain and network from searchable dropdowns
3. **Swap Page** → User is redirected with selected parameters to your existing Swap component

## 🔧 Integration with Existing Swap Component

### Replace Mock Component

In `src/pages/Swap.jsx`, replace `MockSwapComponent` with your existing swap component:

```javascript
// Instead of MockSwapComponent
import YourSwapComponent from './YourSwapComponent';

// In the SwapPage component:
<YourSwapComponent 
  chain={chain} 
  network={network} 
/>
```

### Available Props

Your swap component will receive:
- `chain`: Selected blockchain (e.g., 'ethereum', 'polygon')
- `network`: Selected network (e.g., 'mainnet', 'testnet')

### URL Parameters

The swap page receives parameters via URL:
- `/swap?chain=polygon&network=mainnet`
- Access via `params.chain` and `params.network`

## 🎨 Customization

### Adding New Chains/Networks

Edit `src/data/chains.js`:

```javascript
export const chains = [
  { value: 'ethereum', label: 'Ethereum' },
  { value: 'polygon', label: 'Polygon' },
  { value: 'your-chain', label: 'Your Chain' }, // Add new chain
];

export const networks = [
  { value: 'mainnet', label: 'Mainnet' },
  { value: 'testnet', label: 'Testnet' },
  { value: 'your-network', label: 'Your Network' }, // Add new network
];
```

### Styling

The project uses Tailwind CSS classes for styling. Customize colors, spacing, and layout by modifying the className attributes in each component.

### Wallet Integration

Replace the mock wallet connection in `ConnectWalletButton.jsx`:

```javascript
const handleConnect = async () => {
  // Replace with actual wallet connection logic
  if (window.ethereum) {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    });
    setWalletAddress(accounts[0]);
    setIsConnected(true);
  }
};
```

## 🎯 Key Components

### SearchableSelect
- Dropdown with search functionality
- Keyboard navigation support
- Custom styling with Tailwind CSS

### ChainNetworkForm
- Form validation
- Error handling
- Chain and network selection

### Custom Router
- URL-based navigation
- Browser history support
- Parameter passing between pages

## 🚀 Deployment

### Build for production:
```bash
npm run build
```

### Deploy to hosting platform:
- Upload `build/` folder to your hosting provider
- Configure server for SPA routing (redirect all routes to `index.html`)

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first design approach
- Responsive grid layouts
- Touch-friendly interactions
- Optimized for all screen sizes

## ⚡ Performance Features

- Efficient state management
- Minimal re-renders
- Optimized component structure
- Fast navigation transitions

## 🔐 Security Considerations

- Input validation on form submissions
- XSS protection through React's built-in sanitization
- Secure wallet integration patterns
- Safe parameter handling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - feel free to use this code for your hackathon project!

---

## 🚧 Next Steps for Integration

1. **Replace MockSwapComponent** with your existing swap logic
2. **Add real wallet connection** functionality
3. **Integrate with your blockchain backend**
4. **Add transaction status handling**
5. **Implement error boundaries**
6. **Add loading states**
7. **Include transaction history**

Ready to integrate your existing swap component and ship your hackathon project! 🎉