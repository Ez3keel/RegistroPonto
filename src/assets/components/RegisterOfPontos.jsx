import { Pencil } from "lucide-react";

const RegisterOfPonto = ({ entrada, startInterval, endInterval, exitWork }) => {
  // Pega somente as horas e os minutos do horário atual com verificação
  const horaStartIntervalo = startInterval ? startInterval.substring(0, 5) : "";

  console.log(endInterval);

  return (
    <div className="rounded-xl bg-[#141413] p-4 mt-4 flex-1 min-w-[15rem] max-w-[20rem] ">
      <div className="flex justify-between">
        <div className="text-sm text-neutral-400 ">Entrada:</div>
        <div
          className="text-white text-base flex items-center gap-2
        "
        >
          <button
            className="cursor-pointer"
            onClick={() => {
              alert("Função de editar horário ainda não implementada.");
            }}
          >
            <Pencil size={16} />
          </button>
          {entrada}
        </div>
      </div>

      {horaStartIntervalo && (
        <div className="flex justify-between">
          <div className="text-sm text-neutral-400">Início de Intervalo:</div>
          <div className="text-white text-base">{horaStartIntervalo}</div>
        </div>
      )}

      <div className="flex justify-between">
        <div className="text-sm text-neutral-400">Fim de Intervalo:</div>
        <div className="text-white text-base">{endInterval}</div>
      </div>

      <div className="flex justify-between">
        <div className="text-sm text-neutral-400">Saída</div>
        <div className="text-white text-base">{exitWork}</div>
      </div>
    </div>
  );
};

export default RegisterOfPonto;
