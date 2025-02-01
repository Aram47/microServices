async function getMiddleware(req, res, next) {
    console.log("get middleware of service1");
    next();
}

async function postMiddleware(req, res, next) {
    console.log("post middleware of service1");
    next();
}

export default {
    getMiddleware,
    postMiddleware,
};