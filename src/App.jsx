import "./App.css";

import Container from "./assets/components/Container";
import SectionCard from "./assets/components/SectionCard";
import Header from "./assets/components/Header";
import ButtonMenuConfig from "./assets/components/ButtonMenuConfig";
import AutomaticRegistration from "./assets/components/AutomaticRegistration";
import { useState } from "react";

import ManualRegistration from "./assets/components/ManualRegistration";
import ContainerBorder from "./assets/components/ContainerBorder";
import Label from "./assets/components/Label";

import { Button } from "@/components/ui/button";

function App() {
  const [status, setStatus] = useState("Inativo");
  const [menu, setMenu] = useState("auto"); //auto - manual - config

  const [entrada, setEntrada] = useState("");
  const [horaAtual, setHoraAtual] = useState("");
  const [startInterval, setStartInterval] = useState("");
  const [endInterval, setEndInterval] = useState("");
  const [exitWork, setExitWork] = useState("");

  const labels = [
    { text: "Horas de Trabalho por Dia", type: "text", field: "date" },
    { text: "Intervalo Mínimo (minutos)", type: "text", field: "entrada" },
    {
      text: "Intervalo Máximo (minutos)",
      type: "text",
      field: "startInterval",
    },
    {
      text: "Horário Preferido do intervalo",
      type: "text",
      field: "endInterval",
    },
    {
      text: "Duração Preferida do Intervalo (minutos)",
      type: "text",
      field: "exitWork",
    },
  ];

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
            entrada={entrada}
            setEntrada={setEntrada}
            //horaAtual={horaAtual.substring(0, 5)} //FORMATA A HORA
            horaAtual={horaAtual} //FORMATA A HORA
            setHoraAtual={setHoraAtual}
            startInterval={startInterval}
            setStartInterval={setStartInterval}
            endInterval={endInterval}
            setEndInterval={setEndInterval}
            exitWork={exitWork}
            setExitWork={setExitWork}
          />

          {menu === "manual" && (
            <>
              {/* Entrada Manual */}
              <ManualRegistration
                entrada={entrada}
                setEntrada={setEntrada}
                startInterval={startInterval}
                setStartInterval={setStartInterval}
                endInterval={endInterval}
                setEndInterval={setEndInterval}
                exitWork={exitWork}
                setExitWork={setExitWork}
              />
            </>
          )}

          {menu === "config" && (
            <>
              <Container>
                <ContainerBorder>
                  <h1 className="text-white font-semibold">
                    Configuração de Jornada
                  </h1>
                  <p className="text-neutral-500 text-sm">
                    Configure sua jornada de trabalho e preferências de
                    intervalo
                  </p>

                  {labels.map((label) => {
                    const id = `input-${label.text
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`;

                    return (
                      <Label
                        key={id}
                        text={label.text}
                        type={label.type}
                        id={id}
                        htmlFor={id}
                        value={
                          label.field === "entrada"
                            ? entrada
                            : label.field === "startInterval"
                              ? startInterval
                              : label.field === "endInterval"
                                ? endInterval
                                : label.field === "exitWork"
                                  ? exitWork
                                  : undefined
                        }
                      />
                    );
                  })}
                </ContainerBorder>
              </Container>

              <Button>Click me</Button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
