import "./App.css";

import SectionCard from "./assets/components/SectionCard";
import Header from "./assets/components/Header";
import ContainerBorder from "./assets/components/ContainerBorder";
import Timer from "./assets/components/Timer";
import Button from "./assets/components/Button";
import { Clock4, Play, Pause } from "lucide-react";
import { useState } from "react";
import WorkingTimer from "./assets/components/WorkingTimer";
import Interval from "./assets/components/Interval";

function App() {
  const [status, setStatus] = useState("Inativo");
  const [entrada, setEntrada] = useState("");
  const [horaAtual, setHoraAtual] = useState("");
  const [startInterval, setStartInterval] = useState("");
  const [endInterval, setEndInterval] = useState("");
  const [exitWork, setExitWork] = useState("");

  const statusColors = {
    Inativo: "bg-stone-900",
    Intervalo: "bg-orange-400 text-white",
    Trabalhando: "bg-[#499537] text-white",
  };

  <div
    className={`w-fit p-1 rounded-sm text-xs mt-4 ${
      statusColors[status] || "bg-gray-300"
    }`}
  >
    {status}
  </div>;

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
      <div className="bg-black w-screen min-h-screen">
        <div className="max-w-7xl mx-auto px-8">
          <Header />

          <section className="p-6 flex justify-center space-x-4">
            <div className="flex flex-wrap justify-center gap-4">
              <SectionCard status={status} />
            </div>
          </section>

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
                    {console.log(status)}
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
        </div>
      </div>
    </>
  );
}

export default App;
