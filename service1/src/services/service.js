import DataModel from "../models/model.js";

async function getService(req) {
    console.log('Service1 get service');
    const dataModel = await DataModel.find();
    return dataModel;
}

async function postService(req) {
    const { value } = req.body;
    const dataModel = new DataModel({ value });
    await dataModel.save();
    console.log("Service1 post service");
}

export default {
    getService,
    postService,
};