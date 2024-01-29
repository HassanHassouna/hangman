import React from 'react';
import Letter from "./Letter";

function Letters(props) {


    return (
        <div>
            <div>
                <h3>Available Letters</h3>
                <div>
                    {Object.keys(props.letterStatus).map((letter) => (
                        <Letter
                            selectLetter={props.selectLetter}
                            solution={props.solution}
                            letterStatus={props.letterStatus}
                            score={props.score}
                            setScore={props.setScore}
                            letter={letter} status={props.letterStatus[letter]}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Letters;
