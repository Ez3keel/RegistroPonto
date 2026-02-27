import { useEffect, useState } from "react";

const TimerIncrement = ({ enable, textColor, text }) => {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    let intervalo;

    if (enable) {
      intervalo = setInterval(() => {
        setSegundos((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(intervalo);
  }, [enable]);

  const formatarTempo = (segundos) => {
    const h = String(Math.floor(segundos / 3600)).padStart(2, "0");
    const m = String(Math.floor((segundos % 3600) / 60)).padStart(2, "0");
    const s = String(segundos % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };
  return (
    <div className="rounded-xl bg-[#141413] p-4 mt-4 flex-1 min-w-[15rem] max-w-[20rem]">
      <div className="text-sm text-neutral-400">{text}</div>
      <div className={`${textColor} text-2xl font-semibold`}>
        {formatarTempo(segundos)}
      </div>
    </div>
  );
};

export default TimerIncrement;

//
