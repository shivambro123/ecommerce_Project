import { legacy_createStore as createStore,applyMiddleware,compose } from "redux";
import rootReduce from "./Component/redux/rootReduce";
import thunk from "redux-thunk";


const componseEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(
    rootReduce,
    componseEnhancer(applyMiddleware(thunk))
    
)

export default Store;