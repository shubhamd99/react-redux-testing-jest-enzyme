import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './listItem.scss';


class ListItem extends Component {
    render() {
        const { title, desc } = this.props;
        
        if (!title) {
            return null;
        }

        return (
            <div data-test="listComponent">
                <h2 data-test="titleComponent">{title}</h2>
                <div data-test="descComponent">
                    {desc}
                </div>
            </div>
        )
    }
}

ListItem.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string
}

export default ListItem;
