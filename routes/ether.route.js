const router = require('express').Router();
const {
    CreateWallet,
    ValidateWalletAddress,
    GetLatestTransactions,
} = require('../controllers/Ether.controller.js');

router.post('/create-wallet', CreateWallet);
router.post('/validate-walllet-address', ValidateWalletAddress);
router.get('/list-latest-transaction', GetLatestTransactions);

module.exports = router;