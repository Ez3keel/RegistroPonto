import ContainerBorder from "./ContainerBorder";
import { SquarePen, Save } from "lucide-react";
import Label from "./Label";
import Button from "./Button";
import Container from "./Container";

const ManualRegistration = ({
  entrada,
  setEntrada,
  startInterval,
  setStartInterval,
  endInterval,
  setEndInterval,
  exitWork,
  setExitWork
}) => {

  const handleChange = (field, value) => {
    switch (field) {
      case "entrada":
        setEntrada(value);
        break;
      case "startInterval":
        setStartInterval(value);
        break;
      case "endInterval":
        setEndInterval(value);
        break;
      case "exitWork":
        setExitWork(value);
        break;
      default:
        break;
    }
  };

  const labels = [
    { text: "Data", type: "date", field: "date" },
    { text: "Horário de Entrada", type: "time", field: "entrada" },
    { text: "Início do Intervalo", type: "time", field: "startInterval" },
    { text: "Fim do Intervalo", type: "time", field: "endInterval" },
    { text: "Horário de Saída", type: "time", field: "exitWork" },
  ];

  const handleSave = () => {
    console.log("Entrada:", entrada);
    console.log("Início intervalo:", startInterval);
    console.log("Fim intervalo:", endInterval);
    console.log("Saída:", exitWork);
    alert("Registro manual salvo (simulação).");
  };

  return (
     <Container>
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
            const id = `input-${label.text.toLowerCase().replace(/\s+/g, "-")}`;

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
                onChange={(e) => handleChange(label.field, e.target.value)}
              />
            );
          })}

          <Button backgroundColor="bg-[#2c7cbde8]" ClickOn={handleSave}>
            <Save size={16} />
            Salvar Registro
          </Button>
        </div>
      </ContainerBorder>
     </Container>
  );
};

export default ManualRegistration;

















// import ContainerBorder from "./ContainerBorder";
// import { SquarePen, Save  } from "lucide-react";
// import Label from "./Label";
// import Button from "./Button";

// const ManualRegistration = ({entrada,
//   setEntrada,
//   startInterval,
//   setStartInterval,
//   endInterval,
//   setEndInterval,
//   exitWork,
//   setExitWork}) => {
//   const labels = [
//     { text: "Data", type: "date" },
//     { text: "Horário de Entrada", type: "time" },
//     { text: "Início do Intervalo", type: "time" },
//     { text: "Fim do Intervalo", type: "time" },
//     { text: "Horário de Saída", type: "time" },
//   ];

//   return (
//     <>
//       <div className="max-w-7xl mx-auto px-6">
//         <ContainerBorder>
//           <div className="text-white font-semibold flex gap-2 items-center">
//             <SquarePen size={16} />
//             Inserir Horários Manualmente
//           </div>
//           <p className="text-sm text-neutral-500">
//             Adicione registro de ponto de forma manual
//           </p>

//           <div>
//             {labels.map((label) => {
//               const id = `input-${label.text
//                 .toLowerCase()
//                 .replace(/\s+/g, "-")}`;
//               return (
//                 <Label key={id} text={label.text} type={label.type} id={id} />
//               );
//             })}

//             <Button backgroundColor="bg-[#2c7cbde8]">
//               <Save size={16} />
//               Salvar Registro
//             </Button>
//           </div>
//         </ContainerBorder>
//       </div>
//     </>
//   );
// };

// export default ManualRegistration;
