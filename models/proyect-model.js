const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProyectoSchema = new Schema({
    name: { type: String, required: [true, 'El nombre es requerido']},
    ruta: { type: String},
    codigo: { type: String, required: [true, 'El codigo es requerido'] },
});

module.exports = mongoose.model('Proyecto', ProyectoSchema);