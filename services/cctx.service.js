const ccxt = require('ccxt');

module.exports = {
        getAveragePriceForCoin: async (coins, numOfTransactions) => {
        const exchange = new ccxt.binance();
            const coinAvgPrice = {};
            for (const coin of coins) {
                const trades = await exchange.fetchTrades(coin, undefined, numTransactions);
                const totalPrice = trades.reduce((sum, trade) => sum + parseFloat(trade.price), 0);
                const avgPrice = totalPrice / numOfTransactions;
                coinAvgPrice[coin] = avgPrice;
            }
        return coinAvgPrice;
    }
};
