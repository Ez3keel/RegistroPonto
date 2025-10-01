const Button = ({ backgroundColor, ClickOn, children }) => {
  return (
    <button
      className={`${backgroundColor} w-full h-10 mt-4 rounded-md font-semibold text-white flex gap-2 items-center justify-center text-sm`}
      onClick={ClickOn}
    >
      {children}
    </button>
  );
};

export default Button;
