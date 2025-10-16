import ContainerBorder from "./ContainerBorder";
import Timer from "./Timer";
import Button from "./Button";
import { Clock4, Play, Pause } from "lucide-react";
import WorkingTimer from "./WorkingTimer";
import Interval from "./Interval";

const AutomaticRegistration = ({
  menu,
  status,
  setStatus,
  entrada,
  setEntrada,
  horaAtual,
  setHoraAtual,
  startInterval,
  setStartInterval,
  endInterval,
  setEndInterval,
  exitWork,
  setExitWork,
}) => {
  // const [entrada, setEntrada] = useState("");
  // const [horaAtual, setHoraAtual] = useState("");
  // const [startInterval, setStartInterval] = useState("");
  // const [endInterval, setEndInterval] = useState("");
  // const [exitWork, setExitWork] = useState("");

  const statusColors = {
    Inativo: "bg-stone-900 text-neutral-200",
    Intervalo: "bg-orange-400 text-white",
    Trabalhando: "bg-[#499537] text-white",
  };

  const handleIniciarExpediente = () => {
    const agora = new Date();
    const horas = agora.getHours().toString().padStart(2, "0");
    const minutos = agora.getMinutes().toString().padStart(2, "0");

    setEntrada(`${horas}:${minutos}`);
    setStatus("Trabalhando");
  };

  const ChangeStateInterval = () => {
    setStartInterval(horaAtual); // salva a hora atual
    setStatus("Intervalo"); //Altera o state para intervalo
  };

  const handleEndInterval = () => {
    setEndInterval(horaAtual);
    setStatus("Trabalhando"); //Altera o state para intervalo
  };

  const handleExitWork = () => {
    setExitWork(horaAtual);
    setStatus("Inativo");
    console.log("end");
    console.log(horaAtual);
  };

  return (
    <>
      {menu === "auto" && (
        <div className="max-w-7xl mx-auto px-6">
          <ContainerBorder>
            <div className="flex justify-center flex-col">
              <h1 className="flex gap-2 font-semibold text-neutral-200">
                <Clock4 />
                Registro de Ponto
              </h1>

              <div className="flex flex-col text-center items-center p-8 gap-1">
                {/* Tempo Real */}
                <Timer horaAtual={horaAtual} setHoraAtual={setHoraAtual} />

                <div
                  className={`w-fit p-1 rounded-sm text-xs mt-4 ${
                    statusColors[status] || "bg-gray-300"
                  }`}
                >
                  {/* {console.log(status)} */}
                  {/* Intervalo // Inativo // Trabalhando */}
                  {status}
                </div>

                {/* Blocks of interval */}
                <Interval
                  enable={status === "Intervalo"}
                  status={status}
                  entrada={entrada}
                  startInterval={startInterval}
                  handleEndInterval={handleEndInterval}
                  endInterval={endInterval}
                  exitWork={exitWork}
                />

                {/* Tempo trabalhado */}
                {/* Aparece Os botões para iniciar intervalo e Finalizar o expediente e o horário de entrada  */}
                {status === "Trabalhando" && (
                  <>
                    <WorkingTimer
                      enable={status === "Trabalhando"}
                      entrada={entrada}
                      ChangeStateInterval={ChangeStateInterval}
                      textColor="text-[#499537]"
                      text="Tempo Trabalhando"
                      startInterval={startInterval}
                      handleExitWork={handleExitWork}
                      exitWork={exitWork}
                      handleEndInterval={handleEndInterval}
                      endInterval={endInterval}
                    />
                  </>
                )}

                {/* Button iniciar expediente */}
                {status === "Inativo" && (
                  <Button
                    backgroundColor="bg-[#499537]"
                    ClickOn={handleIniciarExpediente}
                  >
                    <Play size={16} />
                    Iniciar Expediente
                  </Button>
                )}
              </div>
            </div>
          </ContainerBorder>
        </div>
      )}
    </>
  );
};

export default AutomaticRegistration;
