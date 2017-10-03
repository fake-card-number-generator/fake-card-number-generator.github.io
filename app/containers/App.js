import { connect } from 'react-redux';
import { generate, activateCopyFlash, deactivateCopyFlash } from '../actions';
import App from '../components/App';
import { copyTextToClipboard } from '../utils';

const mapStateToProps = (state) => {
    return {
        number: state.number,
        copyFlash: state.copyFlash
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCopyClick: (number) => {
            copyTextToClipboard(number);
            dispatch(activateCopyFlash());
            setTimeout(() => dispatch(deactivateCopyFlash()), 600);
        },
        onGenerateClick: () => dispatch(generate()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
