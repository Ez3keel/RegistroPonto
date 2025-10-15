import ContainerBorder from "./ContainerBorder";

const Card = ({ text, children, description, background }) => {
  return (
    <ContainerBorder>
      <div className="flex flex-row items-center space-x-1.5 w-60">
        <div className={`${background} rounded-sm p-2`}>{children}</div>
        <div className="text-sm text-neutral-500">
          {text}
          <p className="text-2xl text-white font-bold">{description}</p>
        </div>
      </div>
    </ContainerBorder>
  );
};

export default Card;
