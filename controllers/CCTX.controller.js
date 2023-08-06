const ccxt = require('ccxt');
const { getAveragePriceForCoin } = require("../services/cctx.service.js");

module.exports = {

    GetBinanceTradableCoins: async (req, res) => {
        try {
            const exchange = new ccxt.binance();
            const markets = await exchange.loadMarkets();
            const tradableCoins = Object.keys(markets).filter((symbol) => markets[symbol].active);
            return res.status(200).send({
                status: true,
                message: 'Tradable coins list fetch successfully',
                data: {
                    tradabaleCoins: tradableCoins
                }
            });
        } catch (error) {
            return res.status(500).send({
                status: false,
                message: error.message,
            });
        }
    },

    ListAveragePriceForCoin: async (req, res) => {
        try {
            const { coins, numOfTransactions } = req.query;

            const coinAvgPrice = await getAveragePriceForCoin(coins, numOfTransactions);

            return res.status(200).send({
                status: true,
                message: 'Coins average price list fetch successfully',
                data: {
                    coinAvgPrice: coinAvgPrice
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
