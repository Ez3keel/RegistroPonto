import { Pencil } from "lucide-react";

const RegisterOfPonto = ({ entrada, startInterval, endInterval, exitWork }) => {
  // Pega somente as horas e os minutos do horário atual com verificação
  //const horaStartIntervalo = startInterval ? startInterval.substring(0, 5) : "";
  const horaStartIntervalo = startInterval;

  console.log(endInterval);

  return (
    <div className="rounded-xl bg-[#141413] p-4 mt-4 flex-1 min-w-[15rem] max-w-[20rem] ">
      <div className="flex justify-between ">
        <div className="text-sm text-neutral-400 "> Entrada: </div>
        <div
          className="text-neutral-400 text-sm flex items-center gap-2
        "
        >
          <button
            className="cursor-pointer text-xs"
            onClick={() => {
              alert("Função de editar horário ainda não implementada.");
            }}
          >
            <Pencil size={16} />
          </button>
          {/* Exibe o valor de entrada do funcionário */}
          <span className="text-sm">{entrada}</span>
        </div>
      </div>

      <div className="flex justify-between text-neutral-400 text-sm">
        <div> Início de Intervalo: </div>
        <div> {horaStartIntervalo} </div>
      </div>

      <div className="flex justify-between text-neutral-400 text-sm">
        <div> Fim de Intervalo:</div>
        <div> {endInterval}</div>
      </div>

      <div className="flex justify-between text-sm text-neutral-400">
        <div> Saída: </div>
        <div> {exitWork} </div>
      </div>
    </div>
  );
};

export default RegisterOfPonto;
