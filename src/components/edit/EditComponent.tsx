import * as React from 'react';
import { IEditComponentProps, IEditComponentState, IEditInputState } from './EditComponentInterface';
import { IFigureDictionary } from '../../interfaces/Figure';
import { renderCurrencyInput } from './EditFormComponents';

export default class EditComponent extends React.Component<IEditComponentProps, IEditComponentState> {
    private schema: IFigureDictionary;

    constructor (props: IEditComponentProps) {
        super(props);

        // TODO: sort this out, need to have a schema and entries sperately
        this.schema = props.entries[props.entries.length - 1] || {};

        this.state = {
            input: []
        };
    }

    public render () {
        const controls = Object.keys(this.schema).map((label: string) => {
            const figure = this.schema[label];

            switch (figure.type) {
                case 'currency':
                    return renderCurrencyInput(label, figure);
            }
        });

        return (
            <div className="edit">
                <h1>Edit</h1>
                <form onChange={this.handleChange.bind(this)} onSubmit={this.handleSubmit.bind(this)}>
                    { controls }
                    <button className="submit">Submit</button>
                </form>
            </div>
        );
    }

    private handleChange (event: React.FormEvent<HTMLInputElement>) {
        const target = event.target as HTMLInputElement;
        const newInput = [].concat(this.state.input);
        const existingInput: IEditInputState = newInput.find((input: IEditInputState) => input.name === target.name);

        if (existingInput) {
            existingInput.value = target.value;
        } else {
            newInput.push({
                name: target.name,
                value: target.value
            });
        }

        this.setState({ input: newInput });
    }

    private handleSubmit (event: React.FormEvent<EventTarget>) {
        event.preventDefault();
        this.props.handleAddSubmission(this.state.input);
    }
}
