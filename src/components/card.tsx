import { Checkbox } from "./ui/checkbox";
import { ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";

interface CardProps {
  activityName: string,
  setCounter: Function,
  activityDescription: string,
  activityLink: string,
  activityTemplateLink: string,
  dificulty: string

  // E aí? Quais são as props que você vai passar para o Card?
}

export default function Card({
  // Coloque as props que você vai passar para o Card aqui
  activityName,
  setCounter,
  activityDescription,
  activityLink,
  activityTemplateLink,
  dificulty
}: CardProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center gap-2 w-3/4 h-fit bg-conpec-white rounded-lg p-4 shadow-md">
      <header className="flex items-center justify-between w-full">
        <h3 className="text-xl font-semibold text-conpec-black">
          {activityName} - {dificulty}
        </h3>
        <div className="flex items-center gap-2">
          <p>Faça Aqui</p>
          <ExternalLink
            className="text-conpec-blue cursor-pointer hover:text-conpec-orange-strong transition-colors"
            onClick={()=>router.replace(activityLink)}
          />
        </div>
      </header>

      <section className="w-full">
        <p className="text-md font-normal text-conpec-black">
          {activityDescription}
        </p>

        <a
          className="text-md font-normal text-conpec-blue hover:text-conpec-orange-strong transition-colors"
          onClick={()=>router.replace(activityTemplateLink)}
        >
          Link para o gabarito
        </a>
        <div className="flex items-center gap-2">
          <Checkbox
            id="checkbox"
            onCheckedChange={(checked) => {
              // Aqui você vai incrementar ou decrementar o contador de atividades
              // dependendo se a checkbox foi marcada ou desmarcada
              setCounter((prevCounted: number) => (checked)? prevCounted+1:prevCounted-1) 
            }}
            className="border-conpec-orange-strong bg-conpec-blue text-conpec-blue"
          />
          <label
            htmlFor="checkbox"
            className="text-md font-normal text-conpec-black"
          >
            Marcar atividade como concluída
          </label>
        </div>
      </section>
    </div>
  );
}
