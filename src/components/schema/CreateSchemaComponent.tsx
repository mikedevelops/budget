import * as React from 'react';
import { EntrySchema, ICurrencyEntrySchema, IDateEntrySchema } from '../../interfaces/Schema';
import FormControlComponent from '../form/FormControlComponent';
import InputComponent from '../form/InputComponent';
import { ChangeEvent, FormEvent, SyntheticEvent } from 'react';
import { serialize, ISerializedForm } from '../../utiltieis/formSerializer';

export interface ICreateSchemaComponentProps {
    schema: EntrySchema[];
    handleSubmit: (schema: ISerializedForm) => void;
}

interface ICreateSchemaComponentState {
    activeSchema: string;
}

function createCurrencySchemaInput (
    label: JSX.Element,
    schema: ICurrencyEntrySchema
): JSX.Element {
    return (
        <div key={schema.label} className="create-currency-schema-controls">
            { label }
            <FormControlComponent name={`${schema.label}_type`} label={schema.label}>
                <InputComponent name={`${schema.label}_currency`} options={schema.currency} type="SELECT_SINGLE"/>
                <InputComponent name={`${schema.label}_value`} type={schema.value} placeholder={schema.placeholder}/>
            </FormControlComponent>
        </div>
    );
}

function createDateSchemaInput (
    label: JSX.Element,
    schema: IDateEntrySchema
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

function createSchemaInput (
    schema: EntrySchema
): JSX.Element {
    const label = (
        <FormControlComponent name={`${schema.label}_name`} label="label">
            <InputComponent name={`${schema.label}_name`} type="STRING"/>
        </FormControlComponent>
    );

    switch (schema.type) {
        case 'CURRENCY':
            return createCurrencySchemaInput(label, schema);
        case 'DATE':
            return createDateSchemaInput(label, schema);
    }
}

class CreateSchemaComponent extends React.Component<ICreateSchemaComponentProps, ICreateSchemaComponentState> {
    constructor (props: ICreateSchemaComponentProps) {
        super(props);

        this.state = {
            activeSchema: ''
        };
    }

    public render () {
        const schemaInput = this.state.activeSchema && createSchemaInput(
            this.props.schema.find((s) => s.label === this.state.activeSchema));
        const submit = <button>Save</button>;

        return (
            <form className="create-schema-form" onSubmit={this.handleSubmit.bind(this)}>
                <FormControlComponent name="create-schema" label="Choose widget">
                    <InputComponent
                        type="SELECT_SINGLE"
                        name="schema"
                        onChange={this.handleSchemaChange.bind(this)}
                        options={['', ...this.props.schema.map((s) => s.label)]}/>
                </FormControlComponent>
                { schemaInput }
                { schemaInput ? submit : '' }
            </form>
        );
    }

    private handleSchemaChange (event: ChangeEvent<HTMLSelectElement>) {
        this.setState({ activeSchema: event.target.value });
    }

    private handleSubmit (event: SyntheticEvent<EventTarget>) {
        const data = serialize(new FormData(event.target as HTMLFormElement));

        event.preventDefault();
        this.props.handleSubmit(data);
    }
}

export default CreateSchemaComponent;
