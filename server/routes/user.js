const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const userController = require('../controllers/userController');
const verified = require('../routes/verify');

// Routes
//router.post('/', verified,userController.login);
router.get('/', userController.login);
router.post('/', verified, userController.login);

router.post('/authentication', userController.authentication);
router.get('/signupform',userController.signupform);
router.post('/signup',userController.signup);


router.get('/view',  userController.view);
router.post('/view',  userController.find);
router.get('/adduser', userController.form);
router.post('/adduser', verified, userController.create);
router.get('/edituser/:id', verified,userController.edit);
router.post('/edituser/:id', verified,userController.update);
router.get('/viewuser/:id', verified,userController.viewall);
router.get('/:id',verified,userController.delete);
  
module.exports = router;