import React from "react";
import "./header.css";
import Score from "./score.js";
import HighScore from "./highscore.js";

const Header = props => (
  <div className="container">
    <h2 className="title">you can't play my stupid game</h2>
    <h3 className="rules">because i don't know what i'm doing.</h3>

    <p className="scoreBoard">
    <span className="score">score: </span>
    <Score className="score" score={props.score}/>
    <span className="score"> high Score: </span>
    <HighScore className="score" highScore={props.highScore}/>
    </p>

    <p className="alert">{props.message}</p>

  </div>
)

export default Header;