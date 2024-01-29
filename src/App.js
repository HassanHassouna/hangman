import './App.css';
import React from "react";
import Score from "./components/Score";
import Solution from "./components/Solution";
import Letters from "./components/Letters";
import EndGame from "./components/EndGame";

function App() {

    const generateLetterStatuses = () => {
        const statuses = {}
        for (let i = 65; i <= 90; i++) {
            statuses[String.fromCharCode(i)] = false
        }
        return statuses
    }

    const [solution, setSolution] = React.useState({
        word: "BYTES",
        hint: "testing"
    })

    const [score, setScore] = React.useState(100)

    const [letterStatus, setLetterStatus] = React.useState(
        {
            A: false,
            B: false,
            C: false,
            D: false,
            E: true,
            F: false,
            G: false,
            H: false,
            I: false,
            J: false,
            K: false,
            L: false,
            M: false,
            N: false,
            O: false,
            P: false,
            Q: false,
            R: false,
            S: true,
            T: false,
            U: false,
            V: false,
            W: false,
            X: false,
            Y: true,
            Z: false
        }
    )
    return (
        <div className="App">
            <Score score={score}/>
            <Solution solution={solution} letterStatus={letterStatus}/>
            <Letters solution={solution} score={score} setScore={setScore} letterStatus={letterStatus}/>
            <EndGame score={score} solution={solution} letterStatus={letterStatus}/>
        </div>
    );
}

export default App;
