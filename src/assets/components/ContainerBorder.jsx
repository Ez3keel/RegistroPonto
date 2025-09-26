const ContainerBorder = ({ children }) => {
  return (
    <div className="rounded-xl border border-neutral-700 p-6 flex-1 min-w-[16rem] max-w-[20rem]">
      {children}
    </div>
  );
};

export default ContainerBorder;
