# Solana Airdrop App 🪂

A simple Node.js application that demonstrates Solana wallet creation, balance checking, and airdrop functionality on the Solana devnet. Perfect for learning Solana blockchain development basics.

## 🌟 Features

- **Generate Solana Wallets**: Creates new Keypair wallets programmatically
- **Check Wallet Balance**: Query SOL balance using both Alchemy and Solana RPC
- **Request Airdrops**: Get test SOL tokens on devnet for development
- **Modern Transaction Confirmation**: Uses latest Solana confirmation methods
- **Hybrid RPC Approach**: Combines Alchemy (fast) with Solana official RPC (airdrops)

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Alchemy API Key** (free tier available)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/NazWright/solana-airdrop-app.git
   cd solana-airdrop-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get Alchemy API Key**
   - Go to [alchemy.com](https://www.alchemy.com/)
   - Sign up for free account
   - Create new app → Select **Solana Devnet**
   - Copy your API key

4. **Update API Key**
   - Open `index.js`
   - Replace `YOUR_API_KEY` in line 9 with your actual Alchemy API key:
   ```javascript
   const ALCHEMY_RPC_URL = "https://solana-devnet.g.alchemy.com/v2/YOUR_ACTUAL_API_KEY";
   ```

5. **Run the application**
   ```bash
   node index.js
   ```

## 📖 What It Does

When you run the app, it will:

1. **Generate a new Solana wallet** (public/private keypair)
2. **Check initial balance** (should be 0 SOL)
3. **Request 0.1 SOL airdrop** from devnet
4. **Confirm the transaction** using modern confirmation methods
5. **Check updated balance** (should show ~0.1 SOL)

## 🏗️ Code Structure

```
solana-airdrop-app/
├── index.js          # Main application logic
├── package.json      # Dependencies and project config
└── README.md         # This file
```

### Key Components

- **Wallet Generation**: `new Keypair()` creates a new wallet
- **RPC Connection**: Hybrid approach using Alchemy + Solana official RPC
- **Balance Checking**: `connection.getBalance()` queries wallet balance
- **Airdrop Request**: `connection.requestAirdrop()` gets test SOL
- **Transaction Confirmation**: Modern blockhash-based confirmation

## 🌐 Network Information

### Solana Networks Used
- **Devnet**: Development network with free test SOL
- **Mainnet**: Production network (not used in this app)
- **Testnet**: Testing network (alternative to devnet)

### RPC Providers
- **Alchemy**: Fast, reliable RPC for balance queries
- **Solana Official**: Required for airdrop functionality

## 🔧 Extending the Project

### Add More Features

1. **Transfer SOL Between Wallets**
   ```javascript
   const sendTransaction = async (fromKeypair, toPublicKey, amount) => {
     // Implementation here
   };
   ```

2. **Save Wallet to File**
   ```javascript
   const fs = require('fs');
   fs.writeFileSync('wallet.json', JSON.stringify(Array.from(secretKey)));
   ```

3. **Load Existing Wallet**
   ```javascript
   const savedWallet = Keypair.fromSecretKey(new Uint8Array(savedSecretKey));
   ```

4. **Token Operations**
   - Create custom tokens
   - Transfer tokens
   - Check token balances

5. **Smart Contract Interaction**
   - Deploy programs
   - Call program instructions
   - Read program accounts

### Configuration Options

**Change Network:**
```javascript
// Switch to testnet
const connection = new Connection(clusterApiUrl("testnet"), "confirmed");
```

**Adjust Airdrop Amount:**
```javascript
// Request 1 SOL instead of 0.1
1 * LAMPORTS_PER_SOL
```

**Change Commitment Level:**
```javascript
// Use 'finalized' for maximum security
new Connection(RPC_URL, "finalized");
```

## 📚 Learning Resources

- [Solana Documentation](https://docs.solana.com/)
- [Solana Web3.js Docs](https://solana-labs.github.io/solana-web3.js/)
- [Alchemy Solana Docs](https://docs.alchemy.com/reference/solana-api-quickstart)
- [Solana Cookbook](https://solanacookbook.com/)

## 🔍 Troubleshooting

### Common Issues

**"429 Too Many Requests"**
- Use Alchemy API key (higher rate limits)
- Add delays between requests
- Consider paid RPC providers for production

**"Airdrop Failed"**
- Devnet may be congested
- Try smaller amounts (0.1 SOL instead of 1+ SOL)
- Wait between airdrop requests

**"Invalid API Key"**
- Verify Alchemy API key is correct
- Ensure you selected Solana Devnet in Alchemy dashboard

## 🛠️ Technologies Used

- **Node.js**: Runtime environment
- **@solana/web3.js**: Solana JavaScript SDK
- **Alchemy**: RPC provider for reliable blockchain access
- **Solana Devnet**: Test blockchain environment

## 📄 License

MIT License - feel free to use this code for learning and development!

## 🤝 Contributing

Contributions welcome! Ideas for improvements:
- Add CLI interface
- Implement wallet persistence
- Add token transfer functionality
- Create web interface
- Add error handling improvements

---

**Happy building on Solana! 🚀**