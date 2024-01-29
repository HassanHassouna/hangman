import React from 'react';
import Letter from "./Letter";

function Solution(props) {


    return (
        <div>
            <div>
                <h3>Hint</h3>
                <div>{props.solution.hint}</div>
            </div>
            <div>
                <h3>Solution</h3>
                <div>
                    {props.solution.word.split("").map((letter) => (
                        props.letterStatus[letter] ? <Letter letter={letter}/> : "__"
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Solution;
