import ContainerBorder from "./ContainerBorder";

const Card = ({ text, children, description, background }) => {
  return (
    <ContainerBorder>
      <div className="flex flex-row items-center space-x-1.5">
        <div className={`${background} rounded-sm p-2`}>{children}</div>
        <div>
          {text}
          <p className="text-2xl text-white font-bold">{description}</p>
        </div>
      </div>
    </ContainerBorder>
  );
};

export default Card;



