import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";

const middlewares = [];

// only apply redux logs if in development mode
if (process.env.NODE_ENV === "development") {
	const { createLogger } = require("redux-logger");

	const logger = createLogger({
		// ...options https://www.npmjs.com/package/redux-logger
	});

	middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };
