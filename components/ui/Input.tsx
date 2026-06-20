type InputProps = {
  label: string;
  placeholder?: string;
  type?: string;
};

export default function Input({
  label,
  placeholder,
}: InputProps) {
  return (
    <div>
      <label>{label}</label>

      <input
        placeholder={placeholder}
        className="border p-2 w-full"
      />
    </div>
  );
}