import React, { Component, useEffect, useState } from "react";
import '../styles/App.css';

// class App extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             renderBall: false,
//             posi : 0,
//             ballPosition: { left: "0px" }
//         };
//         this.renderChoice = this.renderBallOrButton.bind(this)
//         this.buttonClickHandler = this.buttonClickHandler.bind(this)
//     };

//     buttonClickHandler() {
//      this.state.renderBall = true;
//    }
//     renderBallOrButton() {
// 		if (this.state.renderBall) {
// 		    return <div className="ball" style={this.state.ballPosition}></div>
// 		} else {
// 		    return <button onClick={this.buttonClickHandler} >Start</button>
// 		}
//     }

//     // bind ArrowRight keydown event
//     componentDidMount() {
//      this.onkeydown = () =>{
//          this.state.posi = this.state.posi+1;
//          this.state.ballPosition = {left : this.state.post + 'px'};
//      }
//     }

//     render() {
//         return (
//             <div className="playground">
//                 {this.renderBallOrButton()}
//             </div>
//         )
//     }
// }

const App = () => {
    const [ballPosition, setBallPosition] = useState(0);
    const [gameStart, setGameStart] = useState(false);

    useEffect(() => {
        function handleKeyPress(e) {
            if(!gameStart) return; 
            if(e.key === 'ArrowRight'){
                setBallPosition(ballPosition+5);
            }
            else if(e.key === 'ArrowLeft'){
                setBallPosition(ballPosition - 5);
            }
        }

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        }
    }, [ballPosition, gameStart]);

    return (
        <div className="playground">
            {
                gameStart ?
                    <div className="ball" style={{ left: `${ballPosition}px` }}></div> :
                    <button className="start" onClick={() => setGameStart(true)}>Start</button>
            }
        </div>
    )
}

export default App;
