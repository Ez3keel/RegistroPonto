import Card from "./Card";
import { Clock4, TrendingUp, Loader, Calendar } from "lucide-react";

const SectionCard = () => {
  return (
    <>
      {/* Horas hoje */}
      <Card background="bg-gray-900" text="Horas hoje" description="0h">
        <Clock4 color="#7a97fb" />
      </Card>

      {/*Horas Semana */}
      <Card background="bg-lime-950" text="Horas Semana" description="0h">
        <TrendingUp color="#1A7A1B" />
      </Card>

      {/*Status */}
      <Card background="bg-[#3d2100]" text="Status" description="Inativo">
        <Loader color="oklch(66.6% 0.179 58.318)" />
      </Card>

      {/*Dias Trabalhados */}
      <Card background="bg-[#3d2100]" text="Dias Trabalhados" description="3">
        <Calendar color="oklch(66.6% 0.179 58.318)" />
      </Card>
    </>
  );
};

export default SectionCard;
