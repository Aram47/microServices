async function getMiddleware(req, res, next) {
    console.log("get middleware of service3");
    next();
}

async function postMiddleware(req, res, next) {
    console.log("post middleware of service3");
    next();
}

export default {
    getMiddleware,
    postMiddleware,
};