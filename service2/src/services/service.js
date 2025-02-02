import DataModel from "../models/model.js";

async function getService(req) {
    console.log('Service2 get service');
    const dataModel = await DataModel.find();
    return dataModel;
}

async function postService(req) {
    const { value } = req.body;
    const dataModel = new DataModel({ value });
    await dataModel.save();
    console.log("Service2 post service");
}

export default {
    getService,
    postService,
};