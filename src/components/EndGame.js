import React from 'react';


function EndGame(props) {
    return (
        <div>
            <h3>End Game</h3>
            {
                props.score <= 0 ?
                    <div>Game Over</div> :
                    props.solution.word.split("").every((letter) => props.letterStatus[letter]) ?
                        <div>Congratulations!</div> :
                        ""
            }
        </div>
    );
}

export default EndGame;
