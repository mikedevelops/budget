import { IFigureDictionary } from '../interfaces/Figure';
import { IEditInputState } from '../components/edit/EditComponentInterface';

export const addSubmission = (submission: IEditInputState[]) => {
    return {
        type: 'ADD_SUBMISSION',
        submission
    };
};
