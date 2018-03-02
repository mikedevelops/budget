import { connect, Dispatch } from 'react-redux';
import { IDefaultState } from '../../interfaces/DefaultState';
import EditComponent from './EditComponent';
import { IFigureDictionary } from '../../interfaces/Figure';
import { IEditInputState } from './EditComponentInterface';
import { addSubmission } from '../../actions/actions';

const mapStateToProps = (state: IDefaultState): any => {
    return {
        entries: state.entries
    };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        handleAddSubmission: (data: IEditInputState[]) => {
            dispatch(addSubmission(data));
        }
    };
};

const DashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditComponent) as any;

export default DashboardContainer;
