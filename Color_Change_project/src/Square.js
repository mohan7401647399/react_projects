import React from 'react';

const Square = ({colorValue, hexValue, isDarkText}) => {
  return (
    <section className='square' style={{backgroundColor: colorValue, color: isDarkText ? '#ffffff' : '#000000' }} >
      <p>{ colorValue ? colorValue : "Empty Value" }</p>
      <p> { hexValue ? hexValue : null } </p>
    </section>
  );
}

Square.defaultProps = {
  colorValue: "Empty Color Value"
}

export default Square;
