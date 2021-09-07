import React from 'react';
import PropTypes from 'prop-types';

const History = (props) => {
    const { stories, isSecondColumn } = props;
    return <ul className={`main__history-list ${isSecondColumn ? `main__history-list--second` : ``}`}>
        {stories.map((story, i) => {
            return (
                <li key={i} className="main__history-item">
                    <p>{story.date}</p>
                    <p className="main__history-had">{story.has + ` ` + story.hasCurrency}</p>
                    <img className="main__history-arrow" src="./images/single_arrow.svg" width="40" height="16" alt="Сконвертировано"></img>
                    <p className="main__history-got">{story.want + ` ` + story.wantCurrency}</p>
                </li>
            );
        })}
    </ul>;
};

History.propTypes = {
    stories: PropTypes.arrayOf(PropTypes.shape({
        date: PropTypes.string,
        has: PropTypes.string,
        hasCurrency: PropTypes.string,
        want: PropTypes.string,
        wantCurrency: PropTypes.string,
    })).isRequired,
    isSecondColumn: PropTypes.bool
};

export default History;
