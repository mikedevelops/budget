import { Dispatch, connect } from 'react-redux';
import { IDefaultState } from '../../interfaces/DefaultState';
import HistoryComponent from './HistoryComponent';

const mapStateToProps = (state: IDefaultState): any => {
    return {
        entries: state.entries
    };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({

});

const HistoryContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HistoryComponent) as any;

export default HistoryContainer;
