# Airdrop

Using this script, you can airdrop NFTs to token holders. For eg. Bonk

## Getting Started
1. Clone the repo
2. Install Dependencies: ```yarn install```
3. Add Necessary Config:  
   - `rpcUrl`: Your RPC URL
   - `underdogUrl`: Underdog API URL. Devnet or Mainnet. [Grab it here](https://underdog.readme.io/reference/getting-started-1)
   - `underdogApiKey`: Your Underdog API key. [Grab it here](https://app.underdogprotocol.com)
4. Run the script: ```node index.js```
5. To airdrop to any token holders, you'll need to assign it's mint to `tokenAddress`. You can find the address by searching the token name on [birdeye.so](https://birdeye.so/)

### Additional Information
This script uses the `getTokenLargestAccounts` RPC call to get the top 20 holders of given token and airdrops NFTs to them.

If you want more features to this, open an issue or join our [Telegram](https://t.me/+odpEjJY0m6YyNTQ5) chat
