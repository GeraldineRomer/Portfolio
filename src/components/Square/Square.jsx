import React from 'react';
import './Square.scss';

const Square = ({width, height, title, text, icon}) => {
    const squareStyle = {
        width: width,
        height: height,
    };
    return (
        <div className='square' style={squareStyle}>
            {/* &&. Esto significa que si la prop existe y no es falsa, 
            se renderizará ese elemento en particular, de lo contrario, no se mostrará. */}
            {icon && <i className="square-icon">{icon}</i>}
            {title && <label className="square-title">{title}</label>}
            {text && <p className="square-text">{text}</p>}
        </div>
    );
}

export default Square;
