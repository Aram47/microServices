import service from "../services/service.js";

async function getController(req, res) {
    console.log("get controller of service3");
    try {
        res.status(200).json(await service.getService(req));
    } catch (err) {
        res.status(500).json({message: "error from service3 get controller"});
    }
}

async function postController(req, res) {
    console.log("post controller of service3");
    try {
        await service.postService(req);
        res.status(200).json({message: "Ok from service3 post controller"});
    } catch (err) {
        res.status(500).json({message: "error from service3 post controller"});
    }
}

export default {
    getController,
    postController,
};