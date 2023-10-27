import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import { finances } from "./slice/slice";

const financePersistStore = {
  key: "financerData",
  storage: AsyncStorage,
};

export const persistedFinance = persistReducer(financePersistStore, finances);

export const store = configureStore({
  reducer: {
    finances: persistedFinance,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
