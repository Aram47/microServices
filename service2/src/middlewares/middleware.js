async function getMiddleware(req, res, next) {
    console.log('Service2 get middleware');
    next();
}

async function postMiddleware(req, res, next) {
    console.log('Service2 post middleware');
    next();
}

export default {
    getMiddleware,
    postMiddleware,
};