import { useEffect, useState } from "react";
import { ListCheck, PencilLine, Cog } from "lucide-react";

const ButtonMenuConfig = ({ menu, setMenu }) => {
  const buttons = [
    { label: "Registro Automático", value: "auto", icon: ListCheck },
    { label: "Entrada Manual", value: "manual", icon: PencilLine },
    { label: "Configurações", value: "config", icon: Cog },
  ];

  const [activeButton, setActiveButton] = useState(menu);

  useEffect(() => {
    setActiveButton(menu);
  }, [menu]);

  return (
    <div className="flex space-x-4 w-full">
      {buttons.map((btn) => {
        const Icon = btn.icon;
        return (
          <button
            key={btn.value}
            onClick={() => {
              setActiveButton(btn.value);
              setMenu(btn.value);
            }}
            className={`w-full h-8 rounded-md font-semibold text-white flex gap-2 items-center justify-center text-sm transition-colors m-1
            ${
              activeButton === btn.value
                ? "bg-black"
                : "bg-neutral-950 hover:bg-neutral-800"
            }`}
          >
            <Icon size={16}  />
            <span className="hidden md:inline">{btn.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ButtonMenuConfig;
