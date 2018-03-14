import { WidgetSchema } from '../../interfaces/Schema';
import { ISerializedForm } from '../../utiltieis/formSerializer';

export interface ICreateWidgetAction {
    type: 'CREATE_WIDGET';
    formData: ISerializedForm;
}

export const createWidgetAction = (formData: ISerializedForm): ICreateWidgetAction => {
    return {
        type: 'CREATE_WIDGET',
        formData
    };
};
