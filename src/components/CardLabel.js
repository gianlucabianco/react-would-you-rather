import React from 'react';

import './CardLabel.scss';

class CardLabel extends React.Component {

    render() {

        const {
            isAnswered,
        } = this.props;

        return (
            <div
                className="card-label"
            >
                {
                    isAnswered ?
                    'answered'
                    : 'not answered'
                }
            </div>
        );

    };

};
// TODO: add propTypes
export { CardLabel };