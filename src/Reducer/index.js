import { combineReducers } from "redux";
import filterreducer from "./filterreducer";
import orderreducer from "./orderreducer";
import tablereducer from "./tablereducer";

const reducer = combineReducers({
  tablereducer: tablereducer,
  filterreducer: filterreducer,
  orderreducer: orderreducer,
});

export default reducer;
