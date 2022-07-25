const {Router} = require('express');
const controller = require('./controller');
const doctorRouter = Router();

doctorRouter.get('/',controller.getDoctors);
doctorRouter.get('/:id',controller.getDoctorByID);
doctorRouter.post('/',controller.addDoctor);

module.exports = doctorRouter;