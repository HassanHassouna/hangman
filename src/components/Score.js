import React from 'react';

function Score(props) {

    return (
        <div>
            <h3>Score</h3>
            <div className={
                props.score >= 80 ? "high-score" : props.score >= 50 ? "medium-score" : "low-score"
            }>{props.score}</div>
        </div>
    );
}

export default Score;
