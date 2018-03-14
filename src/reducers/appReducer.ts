import { Action, AnyAction, combineReducers, ReducersMapObject } from 'redux';
import { IDefaultState } from '../interfaces/DefaultState';
import { IEditInputState } from '../components/edit/EditComponentInterface';
import schemaReducer from '../components/widgets/createWidgetReducer';

export default combineReducers({
    schema: schemaReducer
});
