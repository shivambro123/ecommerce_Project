import { combineReducers } from "redux";
import CounterReducer from "./Counter/Counter";
import reducer from "./apidata/Reducer";
const rootReduce = combineReducers({
    api:reducer,
   count:CounterReducer,
  });
  

export default rootReduce
