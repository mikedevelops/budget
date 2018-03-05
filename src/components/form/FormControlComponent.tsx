import * as React from 'react';

interface IFormControlComponentProps {
    name: string;
    label?: string;
}

const FormControlComponent: React.SFC<IFormControlComponentProps> = ({
    name,
    label,
    children
}) => {
    return (
        <div className="form-control">
            { label ? <label htmlFor={name}>{ label }</label> : '' }
            { children }
        </div>
    );
};

export default FormControlComponent;
