import { IFigureDictionary } from './Figure';

export interface IDefaultState {
    mode: 'edit'|'presentation';
    entries: IFigureDictionary[];
}
