import { IDefaultState } from '../../interfaces/DefaultState';
import CreateSchemaComponent, { ICreateWidgetComponentProps } from './CreateWidgetComponent';
import { Dispatch, connect } from 'react-redux';
import { WidgetSchema } from '../../interfaces/Schema';
import { updateSchema } from './createWidgetActions';
import { ISerializedForm } from '../../utiltieis/formSerializer';

const mapStateToProps = (state: any): any => {
    return {
        schema: state.schema.schema
    };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        handleSubmit: (formData: ISerializedForm) => {
            dispatch(updateSchema(formData));
        }
    };
};

const CreateSchemaContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateSchemaComponent) as any;

export default CreateSchemaContainer;
