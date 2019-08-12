import {IrisRouter} from "./router-iris"
import {CosmosRouter} from "./router-cosmos"

export class ApiRouter {
    static getSubRouter(chain){
        return ApiRouter[chain]
    }
}
ApiRouter.iris = IrisRouter;
ApiRouter.cosmos = CosmosRouter;