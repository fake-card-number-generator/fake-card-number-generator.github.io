import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import css from '../styles/main.scss';

const Flash = ({ active }) =>
    <span className={cx(css.copyFlash, { [css.active]: active })}>Copied!</span>;

Flash.propTypes = {
    active: PropTypes.bool
};

Flash.defaultProps = {
    active: true
};

export default Flash;
