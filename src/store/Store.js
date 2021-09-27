import { createStore } from "redux";
import { RootReducer } from "../reducers";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, RootReducer)
// export const Store = createStore(RootReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)