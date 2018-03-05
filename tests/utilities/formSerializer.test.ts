import { serialize } from '../../src/utiltieis/formSerializer';

describe('form serializer', () => {
    let form: HTMLFormElement;
    let text: HTMLInputElement;
    let num: HTMLInputElement;
    let data: FormData;

    beforeEach(() => {
        // Create nodes
        form = document.createElement('form');
        text  = document.createElement('input');
        num = document.createElement('input');

        // Set values
        text.type = 'text';
        text.name = 'text_input';
        text.value = 'text_input';

        num.type = 'num';
        num.name = 'num_input';
        num.value = '666';

        // Append
        form.appendChild(text);
        form.appendChild(num);

        // Data
        data = new FormData(form);
    });

    describe('serialize', () => {
        test('should serialize a form', () => {
            expect(serialize(data)).toEqual({
                text_input: 'text_input',
                num_input: '666'
            });
        });
    });
});
