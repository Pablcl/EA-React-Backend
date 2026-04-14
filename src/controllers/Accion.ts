import { NextFunction, Request, Response } from 'express';
import AccionService from '../services/Accion';

const createAccion = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const savedAccion = await AccionService.createAccion(req.body);
        return res.status(201).json(savedAccion);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const readAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const acciones = await AccionService.getAllAcciones();
        return res.status(200).json(acciones);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export default { createAccion, readAll };
