import { IFigureDictionary } from './Figure';

export interface IDashboardComponentProps {
    mode: 'edit'|'presentation';
    entries: IFigureDictionary[];
}
