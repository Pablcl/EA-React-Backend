import mongoose, { Document, Schema, Types } from 'mongoose';

export interface IOrganizacion {
    name: string;
}

export interface IOrganizacionModel extends IOrganizacion, Document {}

const OrganizacionSchema: Schema = new Schema(
    {
        name: { type: String, required: true }
    },
    {
        versionKey: false,
        // Hace que el campo virtual "usuarios" salga al convertir el documento a JSON.
        toJSON: { virtuals: true },
        // Hace lo mismo cuando el documento se pasa a un objeto normal.
        toObject: { virtuals: true }
    }
);
// Relacion virtual: busca los usuarios cuya organizacion coincide con este _id.
OrganizacionSchema.virtual('usuarios', {
    ref: 'Usuario',
    localField: '_id',
    foreignField: 'organizacion'
});


export default mongoose.model<IOrganizacionModel>('Organizacion', OrganizacionSchema);
