import "./App.css";

import SectionCard from "./assets/components/SectionCard";
import Header from "./assets/components/Header";
import ButtonMenuConfig from "./assets/components/ButtonMenuConfig";
import AutomaticRegistration from "./assets/components/AutomaticRegistration";
import { useState } from "react";

import ManualRegistration from "./assets/components/ManualRegistration";

function App() {
  const [status, setStatus] = useState("Inativo");
  const [menu, setMenu] = useState("auto"); //auto - manual - config

  return (
    <>
      <div className="bg-black w-screen min-h-screen">
        <div className="max-w-7xl mx-auto px-8">
          <Header />

          <section className="m-4 flex justify-center space-x-4">
            <div className="flex flex-wrap justify-center gap-4">
              <SectionCard status={status} />
            </div>
          </section>

          {/* Menu de configuração */}
          <section className="m-4 space-x-4">
            <div className="bg-neutral-950 rounded-sm flex justify-center items-center mx-auto ">
              <ButtonMenuConfig menu={menu} setMenu={setMenu} />
            </div>
          </section>

          {/* Registro automatico de ponto */}
          <AutomaticRegistration
            menu={menu}
            status={status}
            setStatus={setStatus}
          />

          {menu === "manual" && (
            <>
              {/* Entrada Manual */}
              <ManualRegistration />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
