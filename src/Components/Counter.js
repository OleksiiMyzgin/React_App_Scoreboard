import React from 'react'

const Counter = props => {
    return (
      <div className="counter">
        <button 
            className="counter-action decrement" 
            onClick={ () => props.onChange(-1)} > 
            - 
        </button>
        <div className="counter-score"> { props.initialScore } </div>
        <button 
            className="counter-action increment" 
            onClick={ () => props.onChange(+1)} > 
            + 
        </button>
      </div>
    );
};
export default Counter;