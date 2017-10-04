import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../styles/main.scss';
import FlashPortal from './FlashPortal';
import { copyTextToClipboard } from '../utils';

// https://regex101.com/r/KErMIP/1
const formatCardNumber = number => number.replace(/(?=(?!^)(?:\d{4})+$)/g, ' ');

// https://stackoverflow.com/a/33547949
const cardClick = e => {
    const el = e.target;
    const range = document.createRange();
    range.selectNodeContents(el);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
};

class App extends Component {
    constructor() {
        super();
        this.state = { flashTrigger: false };
        this.copyClick = this.copyClick.bind(this);
        this.toggleTrigger = this.toggleTrigger.bind(this);
    }

    copyClick() {
        this.toggleTrigger();
        copyTextToClipboard(this.props.number);
    }

    toggleTrigger() {
        this.setState({ flashTrigger: !this.state.flashTrigger });
    }

    render() {
        const { number, onGenerateClick } = this.props;
        const { flashTrigger } = this.state;

        return (
            <div className={css.container}>
                <p className={css.cardNumber} onClick={cardClick}>{formatCardNumber(number)}</p>
                <div className={css.copyBlock}>
                    <a onClick={this.copyClick} className={css.copyButton}>Copy</a>
                    <FlashPortal trigger={flashTrigger} />
                </div>
                <a onClick={onGenerateClick} className={css.generateButton}>Generate another one</a>
            </div>
        );
    }
}


App.propTypes = {
    number: PropTypes.string.isRequired,
    onGenerateClick: PropTypes.func
};

export default App;
