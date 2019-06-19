class ApiRouter {
    static getSubRouter(chain){
        return ApiRouter[chain]
    }
}

ApiRouter.iris = require("./router-iris").module;
ApiRouter.cosmos = require("./router-cosmos").module;

module.exports = ApiRouter;