import { combineReducers } from 'redux';
import ChangeViewReducer from './ChangeViewReducer';

const RootReducer = combineReducers({
    changeView: ChangeViewReducer
})

export default RootReducer;