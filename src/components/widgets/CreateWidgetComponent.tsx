import * as React from 'react';
import { WidgetSchema, ICurrencyWidgetSchema, IDateWidgetSchema } from '../../interfaces/Schema';
import FormControlComponent from '../form/FormControlComponent';
import InputComponent from '../form/InputComponent';
import { ChangeEvent, FormEvent, SyntheticEvent } from 'react';
import { serialize, ISerializedForm } from '../../utiltieis/formSerializer';

export interface ICreateWidgetComponentProps {
    schema: WidgetSchema[];
    handleSubmit: (schema: ISerializedForm) => void;
}

interface ICreateWidgetComponentState {
    activeSchema: string;
}

function createCurrencyWidgetInput (
    label: JSX.Element,
    schema: ICurrencyWidgetSchema
): JSX.Element {
    return (
        <div key={schema.label} className="create-currency-widget-controls">
            { label }
            <FormControlComponent name={`${schema.label}_type`} label={schema.label}>
                <InputComponent name={`${schema.label}_currency`} options={schema.currency} type="SELECT_SINGLE"/>
                <InputComponent name={`${schema.label}_value`} type={schema.value} placeholder={schema.placeholder}/>
            </FormControlComponent>
        </div>
    );
}

function createDateWidgetInput (
    label: JSX.Element,
    schema: IDateWidgetSchema
): JSX.Element {
    return (
        <div key={schema.label} className="create-date-schema-controls">
            { label }
            <FormControlComponent name={schema.label} label={schema.label}>
                <InputComponent
                name={`${schema.label}_value`} type={schema.value}/>
            </FormControlComponent>
        </div>
    );
}

function createWidgetInput (
    schema: WidgetSchema
): JSX.Element {
    const label = (
        <FormControlComponent name={`${schema.label}_name`} label="label">
            <InputComponent name={`${schema.label}_name`} type="STRING"/>
        </FormControlComponent>
    );

    switch (schema.type) {
        case 'CURRENCY':
            return createCurrencyWidgetInput(label, schema);
        case 'DATE':
            return createDateWidgetInput(label, schema);
    }
}

class CreateSchemaComponent extends React.Component<ICreateWidgetComponentProps, ICreateWidgetComponentState> {
    constructor (props: ICreateWidgetComponentProps) {
        super(props);

        this.state = {
            activeSchema: ''
        };
    }

    public render () {
        const schemaInput = this.state.activeSchema && createWidgetInput(
            this.props.schema.find((s) => s.label === this.state.activeSchema));
        const submit = <button>Save</button>;

        return (
            <form className="create-widget-form" onSubmit={this.handleWidgetSubmit.bind(this)}>
                <FormControlComponent name="create-widget" label="Choose widget">
                    <InputComponent
                        type="SELECT_SINGLE"
                        name="widget"
                        onChange={this.handleWidgetInputChange.bind(this)}
                        options={['', ...this.props.schema.map((s) => s.label)]}/>
                </FormControlComponent>
                { schemaInput }
                { schemaInput ? submit : '' }
            </form>
        );
    }

    private handleWidgetInputChange (event: ChangeEvent<HTMLSelectElement>) {
        this.setState({ activeSchema: event.target.value });
    }

    private handleWidgetSubmit (event: SyntheticEvent<EventTarget>) {
        const data = serialize(new FormData(event.target as HTMLFormElement));

        event.preventDefault();
        this.props.handleSubmit(data);
    }
}

export default CreateSchemaComponent;
