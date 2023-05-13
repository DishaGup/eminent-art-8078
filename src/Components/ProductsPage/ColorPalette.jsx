import React from "react";
import '../../Styles/ProductPage/ColourPallete.css'
function ColorPalette({ colors, selectedColor, onColorChange }) {
  return (
    <div className="color-palette">
        
      {colors.map((color) => (
        <button
          key={color}
          className={`color-palette__swatch ${color === selectedColor ? "active" : ""}`}
          style={{ backgroundColor: color }}
          onClick={() => onColorChange(color)}
        />
      ))}
    </div>
  );
}

export default ColorPalette;
