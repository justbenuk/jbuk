import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

type FormTextareaProps = {
  name: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
};

export default function FormTextarea({
  name,
  label,
  placeholder,
  defaultValue,
}: FormTextareaProps) {
  return (
    <div className="py-2">
      <Label htmlFor={name} className="uppercase font-semibold text-md">
        {label || name}
      </Label>
      <Textarea
        name={name}
        id={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        rows={10}
        className="bg-white p-6"
      />
    </div>
  );
}
