const {Router} = require('express');
const codeController = require('../controllers/codeController');
const codeValid = require('../validators/codeValid');
const codeRouter = Router();



codeRouter.post('/post', 
codeValid.validatePostReq(),
codeController.postCode);

codeRouter.post('/jsFile', codeController.covertCodeToJS);

codeRouter.post('/testCode', codeController.testCodeController);
codeRouter.post('/testCode2', codeController.testCodeController2);
codeRouter.post('/testCode3', codeController.testCodeController3);
codeRouter.get('/', codeController.getCode);
codeRouter.post('/results', codeController.EslinterController);
module.exports = codeRouter;

