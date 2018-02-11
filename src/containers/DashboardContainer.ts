import { connect } from 'react-redux';
import DashboardComponent from '../components/DashboardComponent';
import { DashboardComponentProps } from '../interfaces/DashboardComponent';

const mapStateToProps = (state: any): DashboardComponentProps => {
    return {
        targetCurrency: state.targetCurrency,
        targetValue: state.targetValue
    };
}

const DashboardContainer = connect(
    mapStateToProps
)(DashboardComponent);

export default DashboardContainer;
