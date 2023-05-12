
function ColorPalette({  selectedColor, onColorChange }) {
  const colors=['red','pink','blue','green','cream']

  
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
  export default ColorPalette