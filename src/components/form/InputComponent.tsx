import * as React from 'react';

interface IInputComponentProps {
    type: string;
    name: string;
    options?: string[];
    onChange?: () => void;
    placeholder?: string;
}

const InputComponent: React.SFC<IInputComponentProps> = ({
    type,
    name,
    placeholder = '',
    options,
    onChange
}) => {
    let input;

    switch (type) {
        case 'INT':
            input = <input
                name={name}
                type="text"
                placeholder={placeholder}
                className="input input--number"/>;
            break;
        case 'DATE':
            input = <input
                name={name}
                type="date"
                placeholder={placeholder}
                className="input input--date"/>;
            break;
        case 'STRING':
            input = <input
                name={name}
                type="text"
                placeholder={placeholder}
                className="input input--text"/>;
            break;
        case 'SELECT_SINGLE':
            input = (
                <select name={name} className="input input--select">
                    { options.map((opt: string) =>
                        <option label={opt} key={opt} value={opt}/>) }
                </select>);
            break;
        default:
            throw new Error(`No Input for value "${type}"`);
    }

    return (
        <span onChange={onChange} className="input-container">
            { input }
        </span>
    );
};

export default InputComponent;
