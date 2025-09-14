export default function InputField({
  type = "text",
  name = "",
  placeholder = "",
  className = "",
  required = false,
  value = "",
  onChange = "",
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={`rounded-full border border-stone-200 bg-white px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:ring focus:ring-yellow-400 focus:outline-none md:px-6 md:py-3 ${className}`}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
}
