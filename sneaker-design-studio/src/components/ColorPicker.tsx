interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (color: string) => void;
}

function ColorPicker({
  label,
  value,
  onChange,
}: ColorPickerProps) {
  return (
    <div className="color-picker">
      <label>{label}</label>

      <input
        type="color"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />

      <span>{value}</span>
    </div>
  );
}

export default ColorPicker;