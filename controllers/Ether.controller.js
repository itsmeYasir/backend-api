const { ethers } = require('ethers');
const { getLatestTransation } = require('../services/ether.service');


module.exports = {

    CreateWallet: (req, res) => {

        const wallet = ethers.Wallet.createRandom();

        return res.status(201).send({
            status: true,
            message: 'Wallet created successfully',
            data: {
                wallet: wallet
            }
        });
    },

    ValidateWalletAddress: (req, res) => {
        try {
            const { walletAddress } = req.body;

            const address = walletAddress.toLowerCase().replace('0x', '');
            const isValidAddress = ethers.utils.isAddress(address);

            if (!isValidAddress) {
                return res.status(400).send({
                    status: false,
                    message: 'Invalid wallet address',
                });
            }

            return res.status(200).send({
                status: true,
                message: 'Wallet address is valid',
                data: {
                    isValid: isValidAddress
                }
            });
        } catch (error) {
            return res.status(500).send({
                status: false,
                message: error.message,
            });
        }
    },

    GetLatestTransactions: async (req, res) => {
        try {

            const { address } = req.body;

            const transactions = getLatestTransation(address);

            return res.status(200).send({
                status: true,
                message: 'Transactions list fetch successfully',
                data: {
                    transactions: transactions
                }
            });
        } catch (error) {
            return res.status(500).send({
                status: false,
                message: error.message,
            });
        }
    }

};
