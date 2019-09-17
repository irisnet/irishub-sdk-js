import IrisRouter from "./router-iris"
import CosmosRouter from "./router-cosmos"

let ApiRouter;
export default ApiRouter = {
    getSubRouter : (chain) => {
        return ApiRouter[chain]
    },
    iris : IrisRouter,
    cosmos : CosmosRouter,
};
