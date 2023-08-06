const router = require('express').Router();
const {
    GetBinanceTradableCoins,
    ListAveragePriceForCoin,
} = require('../controllers/CCTX.controller.js');

router.get('/tradable-coin', GetBinanceTradableCoins);
router.get('/coin-average-price', ListAveragePriceForCoin);

module.exports = router;