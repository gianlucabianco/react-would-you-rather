import React from 'react';

import './CardLabel.scss';

class CardLabel extends React.Component {

    randomizeIsAnswered = () => {

        return Math.floor(
          (
            Math.random() * 2
          ) + 1
        ) % 2 === 0;
    
      }

    render() {

        // TODO: re-enable this
        // const {
        //     isAnswered,
        // } = this.props;

        const isAnswered = this.randomizeIsAnswered();

        return (
            <div
                className={`card-label ${isAnswered ? 'answered' : 'not-answered'}`}
            >
                {
                    // TODO: strings should be icons?
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