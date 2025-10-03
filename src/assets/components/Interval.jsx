import Button from "./Button";
import { Pause } from "lucide-react";
import RegisterOfPonto from "./RegisterOfPontos";
import TimerIncrement from "./TimerIncrement";

const Interval = ({
  status,
  entrada,
  enable,
  startInterval,
  handleEndInterval,
  endInterval,
  exitWork,
}) => {
  return (
    <>
      {status === "Intervalo" && (
        <>
          {/* Timer de intervalo */}
          <TimerIncrement
            enable={enable}
            textColor="text-orange-400"
            text="Tempo de Intervalo"
          />

          {/* Button Finalizar Intervalo */}
          <Button
            backgroundColor="bg-blue-400 border border-neutral-700"
            ClickOn={handleEndInterval}
          >
            <Pause size={16} />
            Finalizar Intervalo
          </Button>

          {/* Registro de ponto sempre visível */}
          <RegisterOfPonto
            entrada={entrada}
            startInterval={startInterval}
            endInterval={endInterval}
            exitWork={exitWork}
          />
        </>
      )}
    </>
  );
};

export default Interval;
