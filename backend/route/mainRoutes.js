const express = require('express');
const mainController = require('../controller/mainController');
const adminController = require('../controller/adminController')
const complaintController = require('../controller/complaintController')

const router = express.Router();
const app = express();

router.route('/').get(mainController.home)

router.route('/complaint').get(mainController.complaint)
router.route('/complaint').post(complaintController.complaint)

router.route('/admin').get(mainController.admin)
router.route('/admin').post(adminController.admin)

router.route('/complaints').get(mainController.allComplaints)
router.route('/complaints').post(mainController.complaintStatus)


router.route('/status').get(mainController.status)


module.exports = router