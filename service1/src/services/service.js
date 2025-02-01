import DataModel from "../models/model.js";

async function getService(req) {
    const {id} = req.body;
    const dataModel = await DataModel.findById(id);
    return dataModel;
}

async function postService(req) {
    const {value} = req.body;
    const dataModel = new DataModel({ value });
    await dataModel.save();
    console.log("Service1 post service");
}

export default {
    getService,
    postService,
};