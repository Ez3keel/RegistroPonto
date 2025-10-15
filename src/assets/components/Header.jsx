import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";

const Header = () => {
  const [diaSemana, setDiaSemana] = useState("");

  useEffect(() => {
    const dataAtual = new Date();
    const days = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta"];

    const AllMonths = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];

    const dayOfweek = dataAtual.getDay(); //0 a 6

    const NumberOfMonth = dataAtual.getDate();
    const Month = dataAtual.getMonth();
    const year = dataAtual.getFullYear();
    setDiaSemana(
      `${days[dayOfweek]}, ${NumberOfMonth} de ${AllMonths[
        Month
      ].toLowerCase()} de ${year} `
    );
  }, []);

  return (
    <>
      <header className="flex justify-between items-center p-8">
        <div className="space-y-1.5">
          <h1 className="text-white text-3xl font-bold ">Controle de Ponto</h1>
          <p className="text-muted-foreground">
            Gerencie seus horários de trabalho de forma eficiente
          </p>
        </div>
        <p className="flex gap-2 items-center justify-center text-sm text-muted-foreground">
          <Calendar size={16} />
          {diaSemana}
        </p>
      </header>
    </>
  );
};

export default Header;
