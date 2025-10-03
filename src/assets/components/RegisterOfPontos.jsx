const RegisterOfPonto = ({ entrada, startInterval, endInterval, exitWork }) => {
  // Pega somente as horas e os minutos do horário atual
  const horaStartIntervalo = startInterval.substring(0, 5);

  console.log(endInterval);

  return (
    <div className="rounded-xl bg-[#141413] p-4 mt-4 flex-1 min-w-[15rem] max-w-[20rem] ">
      <div className="flex justify-between">
        <div className="text-sm">Entrada:</div>
        <div className="text-white text-base">{entrada}</div>
      </div>

      {horaStartIntervalo && (
        <div className="flex justify-between">
          <div className="text-sm">Início de Intervalo:</div>
          <div className="text-white text-base">{horaStartIntervalo}</div>
        </div>
      )}

      <div className="flex justify-between">
        <div className="text-sm">Fim de Intervalo:</div>
        <div className="text-white text-base">{endInterval}</div>
      </div>

      <div className="flex justify-between">
        <div className="text-sm">Saída</div>
        <div className="text-white text-base">{exitWork}</div>
      </div>
    </div>
  );
};

export default RegisterOfPonto;
