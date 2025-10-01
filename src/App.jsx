import "./App.css";

import SectionCard from "./assets/components/SectionCard";
import Header from "./assets/components/Header";
import ContainerBorder from "./assets/components/ContainerBorder";
import Timer from "./assets/components/Timer";
import Button from "./assets/components/Button";
import { Clock4, Play, Coffee } from "lucide-react";
import { useState } from "react";
import WorkingTimer from "./assets/components/WorkingTimer";

function App() {
  const [status, setStatus] = useState("Inativo");

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
                  <Timer />
                  <div
                    className={`w-fit p-1 rounded-sm text-xs mt-4 ${
                      status === "Inativo"
                        ? "bg-stone-900"
                        : "bg-[#499537] text-white "
                    }`}
                  >
                    {status === "Inativo" ? "Inativo" : "Trabalhando"}
                  </div>

                  {/* Tempo trabalhado */}
                  <WorkingTimer enable={status === "Ativo"} />

                  {/* Button iniciar expediente */}
                  {status === "Inativo" && (
                    <Button
                      backgroundColor="bg-[#499537]"
                      ClickOn={() => {
                        setStatus(status === "Ativo" ? "Inativo" : "Ativo");
                      }}
                    >
                      <Play size={16} />
                      Iniciar Expediente
                    </Button>
                  )}

                  {/* Button Iniciar Intervalo */}

                  <Button backgroundColor="bg-black border border-neutral-700">
                    <Coffee size={16} />
                    Iniciar Intervalo
                  </Button>

                  {/* Button Finalizar expediente */}
                  <Button backgroundColor="bg-red-500 border border-neutral-700">
                    <Coffee size={16} />
                    Finalizar Expediente
                  </Button>

                  
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
