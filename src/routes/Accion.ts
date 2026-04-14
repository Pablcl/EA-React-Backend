import express from 'express';
import controller from '../controllers/Accion';
import { Schemas, ValidateJoi } from '../middleware/Joi';

const router = express.Router();

router.post('/', ValidateJoi(Schemas.accion.create), controller.createAccion);
router.get('/', controller.readAll);

export default router;
