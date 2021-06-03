//imported to combine your reducers into the root-reducer.
import { combineReducers } from "redux";

//imports persist reducer.
import { persistReducer } from "redux-persist";

//gives us our local storage object on our window browser. Session storage is from another package library.
import storage from "redux-persist/lib/storage";

//import for another reducer related to all user-state.
import userReducer from "./user/user.reducer";
//export the combined reducers here to be injected into another
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
  key: "root", //meaning at what point of our reducer object do we want to start storing everything.
  storage, //storage key goes to whatever storage from redux persist is set.
  whitelist: [
    "cart",
  ] /* contains the string names of any reducers that we want to store locally. Cart is
  set here only because the user reducer is handled by the firebase store.  */,
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
