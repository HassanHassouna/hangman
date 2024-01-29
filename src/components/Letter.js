import React from 'react';

function Letter(props) {
    return (
        <span
            onClick={() => {
                if (
                    props.solution.word.includes(props.letter)
                ) {
                    props.setScore(props.score + 5)
                } else {
                    props.setScore(props.score - 20)
                }
                props.letterStatus[props.letter] = true
            }}
            className={props.status ? "active" : ""}>{props.letter}</span>
    );
}

export default Letter;
