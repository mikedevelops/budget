import { EntrySchema } from '../../interfaces/Schema';
import { ISerializedForm } from '../../utiltieis/formSerializer';

export interface IUpdateSchemaAction {
    type: 'UPDATE_SCHEMA';
    formData: ISerializedForm;
}

export const updateSchema = (formData: ISerializedForm): IUpdateSchemaAction => {
    return {
        type: 'UPDATE_SCHEMA',
        formData
    };
};
