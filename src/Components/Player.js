import React from 'react'
import PropTypes from 'prop-types'; 
import Counter from './Counter';

const Player = props => {
	return(
		<div className="player">
			<div className="player-name">
				<a className="remove-player" onClick={ props.onRemove }>✖</a>
				{ props.name }
			</div>
			<div className="player-score">
				<Counter 
					initialScore={props.score} 
					onChange={props.onScoreChange} 
				/>
			</div>
		</div>
	);
};
Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default Player;