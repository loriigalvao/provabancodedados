import { Schema, model } from 'mongoose';

const workshopSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    specialties: [{

        motor: {
            type: String,
            ref: 'motor',
            required: true
        },
        freios: {
            type: Number,
            ref: 'freios',
            require: true
        },

        suspensao: {
            type: String,
            ref: '',
            required: true
        },
        
    }]
    });

export default model ('Workshop', workshopSchema);