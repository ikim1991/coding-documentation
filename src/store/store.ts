import { createStore } from 'redux';
import RootReducer from './reducers/RootReducer';

const Store = createStore(RootReducer)

export type AppState = ReturnType<typeof RootReducer>;
export default Store;