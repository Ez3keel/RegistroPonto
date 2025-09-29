import "./App.css";

import SectionCard from "./assets/components/SectionCard";
import Header from "./assets/components/Header";
import ContainerBorder from "./assets/components/ContainerBorder";
import Timer from "./assets/components/Timer";
import { Clock4, Play } from "lucide-react";

function App() {
  return (
    <>
      <div className="bg-black w-screen min-h-screen">
        <div className="max-w-7xl mx-auto px-8">
          <Header />

          <section className="p-6 flex justify-center space-x-4">
            <div className="flex flex-wrap justify-center gap-4">
              <SectionCard />
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

                  
                  <div className="bg-stone-900 w-fit p-1 rounded-sm text-sm mt-4">
                    Inativo
                  </div>
                  <button className="bg-[#499537] w-full h-10 mt-4 rounded-sm font-semibold text-white flex gap-2 items-center justify-center text-sm">
                    <Play size={16} />
                    Iniciar Expediente
                  </button>
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
