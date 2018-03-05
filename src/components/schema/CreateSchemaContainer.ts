import { IDefaultState } from '../../interfaces/DefaultState';
import CreateSchemaComponent, { ICreateSchemaComponentProps } from './CreateSchemaComponent';
import { Dispatch, connect } from 'react-redux';
import { EntrySchema } from '../../interfaces/Schema';
import { updateSchema } from './schemaActions';
import { ISerializedForm } from '../../utiltieis/formSerializer';

const mapStateToProps = (state: any): any => {
    console.log(state)

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
