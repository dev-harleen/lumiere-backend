const express = require('express');
const router = express.Router({mergeParams:true});

const notificationCtrl= require('../controllers/notificationController');

router.get("/notification", notificationCtrl.getNotification);
router.get("/notification/:id", notificationCtrl.getNotification);
router.get("/activeNotificationList", notificationCtrl.getActiveNotificationList);

module.exports = router;