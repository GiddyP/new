import { configureStore } from "@reduxjs/toolkit";
import { api } from "../features/api"

const rootReducer = {
	// Add your reducers here
	[api.reducerPath]: api.reducer,
};

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([api.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
