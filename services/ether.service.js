require('dotenv').config();
const axios = require('axios');

module.exports = {
    
    getLatestTransation: async (address) => {
        const response = await axios.get(process.env.ETHERSCAN_API_URL, {
            params: {
                module: 'account',
                action: 'txlist',
                address: address,
                sort: 'desc',
                apikey: process.env.ETHERSCAN_API_URL,
            },
        });

        if (!response.data || !response.data.result) {  
            return [];
        }

        const transactions = response.data.result.slice(0, 1000).map((tx) => ({
            transactionHash: tx.hash,
            senderAddress: tx.from,
            receiverAddress: tx.to,
            amountTransferred: ethers.utils.formatEther(tx.value),
            blockNumber: parseInt(tx.blockNumber),
        }));
        return transactions;
    },

};
