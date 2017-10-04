import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { OrderedSet } from 'immutable';
import Flash from './Flash';

const FLASH_TIMEOUT = 600;

class FlashPortal extends Component {
    constructor(props) {
        super(props);
        this.counter = 0;
        this.state = { flashes: OrderedSet() };
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.flick = this.flick.bind(this);
    }

    componentWillReceiveProps(newProps) {
        const { trigger } = newProps;
        const { trigger: oldTrigger } = this.props;
        if (trigger !== oldTrigger) {
            this.flick();
        }
    }

    add(id) {
        const { flashes } = this.state;
        this.setState({ flashes: flashes.add(id) });
    }

    remove(id) {
        const { flashes } = this.state;
        this.setState({ flashes: flashes.remove(id) });
    }

    flick() {
        const id = this.counter++;
        this.add(id);
        setTimeout(() => { this.remove(id); }, FLASH_TIMEOUT);
    }

    render() {
        const { flashes } = this.state;
        return <span>{flashes.map(id => <Flash key={id} />)}</span>;
    }
}

FlashPortal.propTypes = {
    trigger: PropTypes.bool
};

export default FlashPortal;
