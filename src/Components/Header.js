import React from 'react'
import PropTypes from 'prop-types'; 
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = props => {
	return (
		<div className="header">
			<Stats players={props.players} />
			<h1>{props.title}</h1>
			<Stopwatch />
		</div>
	);
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;