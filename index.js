const axios = require('axios');

const main = async () => {

  const rpcUrl = "";
  const underdogUrl = "";
  const underdogApiKey = "";


  const tokenAddress = "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263"; // Bonk

  const nftName = "GigaMint";
  const nftImage = "https://i.ytimg.com/vi/Ux5cQbO_ybw/maxresdefault.jpg";

  const batch = [];

  const response = await axios.post(`${rpcUrl}`,
    {
      "jsonrpc": "2.0",
      "id": 1,
      "method": "getTokenLargestAccounts",
      "params": [
        tokenAddress,
      ]
    }
  )

  response.data.result.value.forEach((res) => {
    batch.push({ receiverAddress: res.address });
  });

  const udogResponse = await axios.post(`${underdogUrl}/v2/projects/1/nfts/batch`, {
    name: nftName,
    image: nftImage,
    batch: batch,
  },
    {
      headers: {
        Authorization: `Bearer ${underdogApiKey}`
      }
    })

  console.log(udogResponse.data);
};

main();
