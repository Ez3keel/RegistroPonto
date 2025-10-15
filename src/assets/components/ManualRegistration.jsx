import ContainerBorder from "./ContainerBorder";
import { SquarePen, Save  } from "lucide-react";
import Label from "./Label";
import Button from "./Button";

const ManualRegistration = () => {
  const labels = [
    { text: "Data", type: "date" },
    { text: "Horário de Entrada", type: "time" },
    { text: "Início do Intervalo", type: "time" },
    { text: "Fim do Intervalo", type: "time" },
    { text: "Horário de Saída", type: "time" },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-6">
        <ContainerBorder>
          <div className="text-white font-semibold flex gap-2 items-center">
            <SquarePen size={16} />
            Inserir Horários Manualmente
          </div>
          <p className="text-sm text-neutral-500">
            Adicione registro de ponto de forma manual
          </p>

          <div>
            {labels.map((label) => {
              const id = `input-${label.text
                .toLowerCase()
                .replace(/\s+/g, "-")}`;
              return (
                <Label key={id} text={label.text} type={label.type} id={id} />
              );
            })}

            <Button backgroundColor="bg-[#2c7cbde8]">
              <Save size={16} />
              Salvar Registro
            </Button>
          </div>
        </ContainerBorder>
      </div>
    </>
  );
};

export default ManualRegistration;
