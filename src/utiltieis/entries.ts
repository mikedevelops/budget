import { IFigureDictionary, ICurrencyFigure } from '../interfaces/Figure';

/**
 * Merge Currecy figures
 * @param figureOld
 * @param figureNew
 */
export function mergeCurrencyFigure (
    figureOld: ICurrencyFigure,
    figureNew: ICurrencyFigure
): ICurrencyFigure {
    figureOld.value += figureNew.value;
    return figureOld;
}

export function getCumulativeEntries (
    entries: IFigureDictionary[]
): IFigureDictionary {
    return entries.reduce((result: IFigureDictionary, entry: IFigureDictionary) => {
        Object.keys(entry).forEach((figureKey: string) => {
            const unique = !result.hasOwnProperty(figureKey);
            const figure = entry[figureKey];

            // If the entry is unique to the cumulative object
            // we will just assignte new property and return
            if (unique) {
                result[figureKey] = figure;
                return result;
            }

            // Handle currency figures
            if (figure.type === 'currency') {
                result[figureKey] = mergeCurrencyFigure(result[figureKey], figure);
                return result;
            }
        });

        return result;
    }, {});
}
