const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConjuntoSchema = new Schema({
    proyecto: { type: String, required: [true, 'El proyecto es requerido']},
    usuario: { type: String, required: [true, 'El usuario es requerido']},
    rol:{ type: String, required: [true, 'El rol es requerido']}
});

module.exports = mongoose.model('Conjunto', ConjuntoSchema);