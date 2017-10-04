import { connect } from 'react-redux';
import { generate } from '../actions';
import App from '../components/App';

const mapStateToProps = (state) => ({
    number: state.number,
});

const mapDispatchToProps = (dispatch) => ({
    onGenerateClick: () => dispatch(generate()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
