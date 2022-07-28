const {Router} = require('express');
const controller = require('./controler');
const patientRouter = Router();

patientRouter.get('/:id',controller.getPatient);
patientRouter.put('/:id',controller.updatePatientData);
patientRouter.post('/',controller.addPatient);
patientRouter.delete('/:id',controller.removePatient);

module.exports = patientRouter;