import { IDefaultState } from '../../interfaces/DefaultState';
import CreateSchemaComponent, { ICreateWidgetComponentProps } from './CreateWidgetComponent';
import { Dispatch, connect } from 'react-redux';
import { WidgetSchema } from '../../interfaces/Schema';
import { ISerializedForm } from '../../utiltieis/formSerializer';
import { createWidgetAction } from './createWidgetActions';

const mapStateToProps = (state: any): any => {
    return {
        schema: state.schema.schema
    };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        handleSubmit: (formData: ISerializedForm) => {
            dispatch(createWidgetAction(formData));
        }
    };
};

const CreateSchemaContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateSchemaComponent) as any;

export default CreateSchemaContainer;
