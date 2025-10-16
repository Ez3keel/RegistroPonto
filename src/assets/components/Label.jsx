const Label = ({ text, type, id, value, onChange }) => {
  return (
    <label htmlFor={id} className="flex flex-col font-medium  text-white mt-2">
      {text}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="border border-neutral-800 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </label>
  );
};

export default Label;
