
export default function Checkbox({ id, label, onChange, checked }) {
  const onChangeHandler = (id): any => {
    return function () {
      onChange(id);
    };
  };
  return (
    <div>
      <input
        type="checkbox"
        name={label}
        onChange={onChangeHandler(id)}
        checked={checked}
      />
      <label>{label}</label>
    </div>
  );
}
