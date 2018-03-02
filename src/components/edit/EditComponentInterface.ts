import { IFigureDictionary } from '../../interfaces/Figure';

export interface IEditComponentProps {
    entries: IFigureDictionary[];
    handleAddSubmission: (data: IEditInputState[]) => void;
}

export interface IEditInputState {
    name: string;
    value: string;
}

export interface IEditComponentState {
    input: IEditInputState[];
}
