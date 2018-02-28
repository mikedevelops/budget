import { connect, Dispatch } from 'react-redux';
import DashboardComponent from '../components/DashboardComponent';
import { IDashboardComponentProps } from '../interfaces/DashboardComponent';
import { IDefaultState } from '../interfaces/DefaultState';

const mapStateToProps = (state: IDefaultState): any => {
    return {
        mode: state.mode,
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
