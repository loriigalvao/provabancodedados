import { Schema, model} from 'mongoose';

const maintenanceSchema = new Schema({
    workshop: {
        type: String,
        ref: Schema.Types.ObjectId,
        required: true
    },
    vehicle: {
        type: String,
        ref: Schema.Types.ObjectId,
        required: true
    },
    services: 
    {
        name: {
            type: String,
            ref: Schema.Types.ObjectId,
            required: false
        },
        price: {
            type: Number,
            ref: Schema.Types.ObjectId,
            require: false
        },
    },
    date: {
        type: Date,
        ref: 'date',
        required: true
    },
    totalCost: {
        type: Number,
        ref: 'totalCost',
        required: true
    }
});
console.log(maintenanceSchema);

export default model ('Maintenance', maintenanceSchema);

