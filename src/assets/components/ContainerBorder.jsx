const ContainerBorder = ({ children }) => {
  return (
    <div className="rounded-xl border border-neutral-700 bg-stone-950 p-4 flex-1 min-w-[10rem] max-w-[20rem]">
      {children}
    </div>
  );
};

export default ContainerBorder;
