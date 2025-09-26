import "./App.css";

import SectionCard from "./assets/components/SectionCard";
import Header from "./assets/components/Header";
import ContainerBorder from "./assets/components/ContainerBorder";

function App() {
  return (
    <>
      <div className="bg-black w-screen min-h-screen">
        <div className="max-w-7xl mx-auto px-8">
          <Header />

          <section className="p-8 flex justify-center space-x-4">
            <div className="flex flex-wrap justify-center gap-4">
              <SectionCard />

              <div>
                <ContainerBorder>
                  <div className="flex justify-center flex-col">
                    <h1 className="font-bold text-neutral-200">
                      Registro de Ponto
                    </h1>

                    <div className="text-[#7a97fb] font-bold text-4xl">
                      00:00:00
                    </div>
                    <div className="text-[0.8rem]">
                      {new Date().toLocaleDateString("pt-BR")}
                    </div>
                  </div>
                </ContainerBorder>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
