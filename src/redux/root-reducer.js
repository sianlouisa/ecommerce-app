import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

// use local storage as default storage, can also use sessionStorage
import storage from "redux-persist/lib/storage";

const persistConfig = {
	// point inside reducer object start storing
	key: "root",
	storage,
	// reducers to store
	whitelist: ["cart"],
};

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
