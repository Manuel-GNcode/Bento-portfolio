export const Marquee = ()=>{
    return (
        <div className="wrapper">
            <span style={{"--i": 0}}>
                <img alt="Tic Tac Toe game" src="/ticTacToe-second.jpg"></img>
            </span>
            <span style={{"--i": 1}}>
                <img alt="2D portfolio using Kaboon.js" src="/2DPortfolio-one.jpg"></img>
            </span>
            <span style={{"--i": 2}}>
                <img alt="Lau Illustration" src="/cute-portfolio-1.webp"></img>
            </span>
            <span style={{"--i": 3}}>
                <img alt="Color Balance" src="/color-balance-1.webp"></img>
            </span>
            <span style={{"--i": 4}}>
                <img alt="Arkanoid game" src="/arkanoid-1.webp"></img>
            </span>
        </div>
    );
}