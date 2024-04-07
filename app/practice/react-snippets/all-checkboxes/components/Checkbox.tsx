
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Checkbox({
  id,
  label,
  onChange,
  checked,
}: Readonly<{
  id: string | number;
  label: string;
  onChange: (id: string | number) => void;
  checked: boolean;
}>) {
  const onChangeHandler = (id: string | number): (() => void) => {
    return function () {
      onChange(id);
    };
  };
  return (
      <Label htmlFor={label}>
        {label}
        <Input
          type="checkbox"
          name={label}
          onChange={onChangeHandler(id)}
          checked={checked}
        />
      </Label>
  );
}
