import mongoose from 'mongoose';
import Accion, { IAccion, IAccionModel } from '../models/Accion';

const createAccion = async (data: Partial<IAccion>): Promise<IAccionModel> => {
    const accion = new Accion({
        _id: new mongoose.Types.ObjectId(),
        ...data
    });

    return await accion.save();
};

const getAllAcciones = async (): Promise<IAccionModel[]> => {
    return await Accion.find().sort({ date: -1 });
};

export default { createAccion, getAllAcciones };
