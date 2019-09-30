import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";

const middlewares = [];

// only apply redux logs if in development mode
if (process.env.NODE_ENV === "development") {
	const { createLogger } = require("redux-logger");

	const logger = createLogger({
		// ...options https://www.npmjs.com/package/redux-logger
	});

	middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
