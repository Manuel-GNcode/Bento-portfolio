export const Marquee = ()=>{
    return (
        <div className="wrapper">
            <span style={{"--i": 1}}>
                <img alt="2D portfolio using Kaboon.js" src="/2DPortfolio-one.jpg"></img>
            </span>
            <span style={{"--i": 2}}>
                <img alt="App to know days until an event" src="/missingDays-third.jpg"></img>
            </span>
            <span style={{"--i": 3}}>
                <img alt="Phone validator" src="/phoneValidator-one.jpg"></img>
            </span>
            <span style={{"--i": 4}}>
                <img alt="Pokedesk" src="/pokeDex-one.jpg"></img>
            </span>
            <span style={{"--i": 5}}>
                <img alt="Task app" src="/pomodoro-third.jpg"></img>
            </span>
            <span style={{"--i": 6}}>
                <img alt="Tic Tac Toe game" src="/ticTacToe-second.jpg"></img>
            </span>
        </div>
    );
}