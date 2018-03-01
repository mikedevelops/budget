import { IFigureDictionary } from '../../interfaces/Figure';

export interface IDashboardComponentProps {
    mode: 'edit'|'presentation';
    entries: IFigureDictionary[];
}
