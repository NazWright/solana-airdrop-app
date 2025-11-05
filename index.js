const {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL
} = require("@solana/web3.js");

// Alchemy RPC URL - Replace YOUR_API_KEY with your actual API key
const ALCHEMY_RPC_URL = "https://solana-devnet.g.alchemy.com/v2/YOUR_API_KEY";

// define solana wallet
const solanaWallet = new Keypair();

// grab wallet credentials
const publicKey = solanaWallet.publicKey;
const secretKey = solanaWallet.secretKey;  

console.log({ publicKey, secretKey });

const getWalletBalance = async () => {  
    try {
        const connection = new Connection(ALCHEMY_RPC_URL, "confirmed");
        const balance = await connection.getBalance(publicKey);
        console.log(`Wallet balance: ${balance / LAMPORTS_PER_SOL} SOL`);
    } catch (error) {
        console.error(error)
    }
}


const airdropSol = async () => {
    try {
        const connection = new Connection(ALCHEMY_RPC_URL, "confirmed");
        const airdropSignature = await connection.requestAirdrop(
            publicKey,
            .01 * LAMPORTS_PER_SOL
        );
        
        const latestBlockHash = await connection.getLatestBlockhash();
        await connection.confirmTransaction({
            blockhash: latestBlockHash.blockhash,
            lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
            signature: airdropSignature,
        });
        console.log("Airdrop completed");
    } catch (error) {
        console.error(error);
    }
};

const runner = async () => {
    await getWalletBalance();
    
    console.log("Waiting 2 seconds before airdrop...");
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    await airdropSol();
    
    console.log("Waiting 3 seconds before checking balance...");
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    await getWalletBalance();
}

runner();