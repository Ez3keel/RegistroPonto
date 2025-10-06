import Button from "./Button";
import RegisterOfPonto from "./RegisterOfPontos";
import TimerIncrement from "./TimerIncrement";
import { Coffee, Square } from "lucide-react";

const WorkingTimer = ({
  enable,
  entrada,
  ChangeStateInterval,
  textColor,
  text,
  startInterval,
  handleExitWork,
  exitWork,
  endInterval,

}) => {
  return (
    <>
      <TimerIncrement
        enable={enable}
        textColor={textColor}
        text={text}
      />
      {/* Button Iniciar Intervalo */}
      <Button
        backgroundColor="bg-black border border-neutral-700"
        ClickOn={ChangeStateInterval}
      >
        <Coffee size={16} />
        Iniciar Intervalo
      </Button>

      {/* Button Finalizar expediente */}
      <Button backgroundColor="bg-red-500 border border-none"
        ClickOn={handleExitWork}>
        <Square size={16} />
        Finalizar Expediente
      </Button>

      {/* Marca o registro de entrada */}
      <RegisterOfPonto 
        entrada={entrada} 
        startInterval={startInterval}
        endInterval={endInterval} 
        exitWork={exitWork} 
      />
          </>
  );
};

export default WorkingTimer;
