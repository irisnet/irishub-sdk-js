import {IrisRouter} from "./router-iris"
import {CosmosRouter} from "./router-cosmos"

export const ApiRouter = {};
ApiRouter.getSubRouter = function(chain){
    return ApiRouter[chain]
};
ApiRouter.iris = IrisRouter;
ApiRouter.cosmos = CosmosRouter;