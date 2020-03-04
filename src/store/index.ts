import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { chatReducer } from "./chat/reducers";
import { pointsReducer } from "./points/reducers";
import { counterReducer } from "./counter/reducers";
import { windowSizeReducer } from "./windowSize/reducers";

const rootReducer = combineReducers({
  chat: chatReducer,
  points: pointsReducer,
  counter: counterReducer,
  windowSize: windowSizeReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
}
