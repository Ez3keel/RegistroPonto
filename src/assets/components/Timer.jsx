import { useState, useEffect } from "react";


const Timer = () => {
  const [horaAtual, setHoraAtual] = useState("00:00:00");

  useEffect(() => {
    // Função para atualizar a hora
    const atualizarHora = () => {
      const agora = new Date();
      // Pega as horas / converte em string / preenche com zero se for menor que 10
      const horas = agora.getHours().toString().padStart(2, "0");
      const minutos = agora.getMinutes().toString().padStart(2, "0");
      const segundos = agora.getSeconds().toString().padStart(2, "0");
      setHoraAtual(`${horas}:${minutos}:${segundos}`);
    };

    // Atualiza imediatamente ao montar
    atualizarHora();

    // Configurar o intervalo para atualizar a cada segundo
    const intervalo = setInterval(atualizarHora, 1000);

    // limpa a memória quando for desmontado
    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <div className="text-[#7a97fb] font-bold text-4xl h-full w-full">
        {horaAtual}
      </div>
      <div className="text-[0.8rem]">
        {/* Atualiza a data do dia atual */}
        {new Date().toLocaleDateString("pt-BR")}
      </div>
    </>
  );
};

export default Timer;
