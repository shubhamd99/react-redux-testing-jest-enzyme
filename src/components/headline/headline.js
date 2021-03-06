import React, { Component } from 'react';
import './headline.scss';
import PropTypes from 'prop-types';

class Headline extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { header, desc, tempArr } = this.props;

        if (!header) {
            return null;
        }

        return (
            <div data-test="HeadlineComponent">
               <h1 data-test="header">{header}</h1>
               <p data-test="desc">{desc}</p>
            </div>
        )
    }
}

Headline.propTypes = {
    header: PropTypes.string,
    desc: PropTypes.string,
    tempArr: PropTypes.arrayOf(PropTypes.shape({
        fName: PropTypes.string,
        age: PropTypes.number,
        onlineStatus: PropTypes.bool
    }))
}

export default Headline;