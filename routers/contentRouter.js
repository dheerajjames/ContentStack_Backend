const express = require('express');
const {getBanner, getNav, getMainContent, getClients, getFooter} = require('../controller/contentContoller');


const router  = express.Router();

router.route('/banner').get(getBanner);
router.route('/nav').get(getNav);
router.route('/main').get(getMainContent);
router.route('/clients').get(getClients);
router.route('/footer').get(getFooter);


module.exports = router;