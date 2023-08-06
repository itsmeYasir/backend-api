const router = require('express').Router();
const etherRoutes = require("./ether.route.js");
const cctxRoutes = require("./cctx.route.js");

router.use('/cctx', etherRoutes);
router.use('/ether', cctxRoutes);

module.exports = router;
