import mongoose, { Document, Schema } from 'mongoose';

export type ResourceType = 'usuario' | 'organizacion';
export type OperationType = 'create' | 'update' | 'delete';

export interface IAccion {
    resourceType: ResourceType;
    operation: OperationType;
    resourceId: mongoose.Types.ObjectId | string;
    resourceName: string;
    date: Date;
}

export interface IAccionModel extends IAccion, Document {}

const AccionSchema: Schema = new Schema(
    {
        resourceType: { type: String, required: true, enum: ['usuario', 'organizacion'] },
        operation: { type: String, required: true, enum: ['create', 'update', 'delete'] },
        resourceId: { type: Schema.Types.ObjectId, required: true },
        resourceName: { type: String, required: true },
        date: { type: Date, required: true, default: Date.now }
    },
    {
        versionKey: false
    }
);

export default mongoose.model<IAccionModel>('Accion', AccionSchema);
