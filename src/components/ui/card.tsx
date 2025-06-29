import { Checkbox } from "./checkbox";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface CardProps {
  activityName: string;
  activityDescription: string;
  activityLink: string;
  activityTemplateLink: string;
  dificulty: string;
  isCompleted?: boolean;
  onToggleComplete?: (activityName: string, isCompleted: boolean) => void;
}

export default function Card({
  activityName,
  activityDescription,
  activityLink,
  activityTemplateLink,
  dificulty,
  isCompleted = false,
  onToggleComplete,
}: CardProps) {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center gap-2 w-3/4 bg-conpec-white rounded-lg p-4 shadow-md">
      <header className="flex items-center justify-between w-full">
        <h3 className="text-xl font-semibold text-conpec-black">
          {activityName} - {dificulty}
        </h3>
        <div className="flex items-center gap-2">
          <p>Faça Aqui</p>
          <ExternalLink
            className="text-conpec-blue cursor-pointer hover:text-conpec-orange-strong transition-colors"
            onClick={() => router.replace(activityLink)}
          />
        </div>
      </header>

      <section className="w-full">
        <p className="text-md font-normal text-conpec-black">
          {activityDescription}
        </p>

        <Link
          className="text-md font-normal text-conpec-blue hover:text-conpec-orange-strong transition-colors"
          href={activityTemplateLink}
        >
          Link para o gabarito
        </Link>
        <div className="flex items-center gap-2">
          <Checkbox
            id={`checkbox-${activityName}`}
            checked={isCompleted}
            onCheckedChange={(checked) => {
              const isChecked = checked === true;
                if (onToggleComplete) {
                  onToggleComplete(activityName, isChecked);
                }

            }}
            className="border-conpec-orange-strong bg-conpec-blue text-conpec-blue"
          />
          <label
            htmlFor={`checkbox-${activityName}`}
            className="text-md font-normal text-conpec-black"
          >
            Marcar atividade como concluída
          </label>
        </div>
      </section>
    </div>
  );
}
