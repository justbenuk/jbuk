import { Input } from "../ui/input";
import { Label } from "../ui/label";

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
};

export default function FormInput({
  name,
  type,
  label,
  placeholder,
  defaultValue,
}: FormInputProps) {
  return (
    <div className="py-2">
      <Label htmlFor={name} className="uppercase font-semibold text-md">
        {label || name}
      </Label>
      <Input
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="bg-white p-6"
      />
    </div>
  );
}
