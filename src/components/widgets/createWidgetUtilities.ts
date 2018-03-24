import { WidgetSchema } from '../../interfaces/Schema';
import { IWidget } from '../../interfaces/Widget';

export function createWidgetFromSchema (
    schema: WidgetSchema,
    data: { [index: string]: any }
): IWidget {
    const widgetReference = data.widget + '_';
    const re = new RegExp(`^${widgetReference}`);
    const widget = {
        type: data.widget
    } as IWidget;

    for (const key in data) {
        if (re.test(key)) {
            widget[key.split(widgetReference).pop()] = data[key];
        }
    }

    return widget;
}
