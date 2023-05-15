import React from "react";
import '../../Styles/ProductPage/ColourPallete.css';
import {Box} from '@chakra-ui/react';
function ColorPalette({ colors, selectedColor, onColorChange }) {
  return (
    <Box className="color-palette" display={{base:'none',lg:'block'}} >
        
      {colors.map((color) => (
        <button
          key={color}
          className={`color-palette__swatch ${color === selectedColor ? "active" : ""}`}
          style={{ backgroundColor: color }}
          onClick={() => onColorChange(color)}
        />
      ))}
    </Box>
  );
}

export default ColorPalette;
