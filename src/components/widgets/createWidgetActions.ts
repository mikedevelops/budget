import { WidgetSchema } from '../../interfaces/Schema';
import { ISerializedForm } from '../../utiltieis/formSerializer';
import { AnyAction } from 'redux';

export const CREATE_WIDGET = 'CREATE_WIDGET';

export const createWidgetAction = (data: ISerializedForm): AnyAction => ({
    type: CREATE_WIDGET ,
    payload: { data }
});
