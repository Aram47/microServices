import {Schema, model} from 'mongoose';

const dataModel = new Schema({
    value: {
        type: String,
        required: true,
    },
}, {
    timestamps: true 
});

const DataModel = model('DataModel', dataModel);

export default DataModel;