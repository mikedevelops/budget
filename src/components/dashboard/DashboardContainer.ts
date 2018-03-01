import { connect, Dispatch } from 'react-redux';
import { IDefaultState } from '../../interfaces/DefaultState';
import DashboardComponent from './DashboardComponent';

const mapStateToProps = (state: IDefaultState): any => {
    return {
        entries: state.entries
    };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({

});

const DashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardComponent) as any;

export default DashboardContainer;
