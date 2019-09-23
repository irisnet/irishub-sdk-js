import IrisRouter from "./router-iris"
import CosmosRouter from "./router-cosmos"

export default class ApiRouter {
    static getSubRouter(chain){
        switch (chain) {
            case "iris" : {
                return IrisRouter
            }
            case "cosmos" : {
                return CosmosRouter
            }
            default :
                throw new Error("unsupport chain")
        }
    }

    static getHandler(chain,method){
        let handler = ApiRouter.getSubRouter(chain).get(method);
        if(!handler){
            throw new Error(`unsupport method: chain:${chain},method:${method}`)
        }
        return handler
    }
}
