const ContainerBorder = ({ children }) => {
  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4 flex-1 min-w-[10rem] max-w-[40rem]">
      {children}
    </div>
  );
};

export default ContainerBorder;
