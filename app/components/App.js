import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from '../styles/main.scss';

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

const App = ({ number, copyFlash, onCopyClick, onGenerateClick }) =>
    <div className={css.container}>
        <p className={css.cardNumber} onClick={cardClick}>{formatCardNumber(number)}</p>
        <div className={css.copyBlock}>
            <a onClick={() => onCopyClick(number)} className={css.copyButton}>Copy</a>
            <span className={cx(css.copyFlash, { [css.active]: copyFlash })}>Copied!</span>
        </div>
        <a onClick={onGenerateClick} className={css.generateButton}>Generate another one</a>
    </div>;

App.propTypes = {
    number: PropTypes.string.isRequired,
    copyFlash: PropTypes.bool.isRequired,
    onCopyClick: PropTypes.func,
    onGenerateClick: PropTypes.func
};

export default App;
