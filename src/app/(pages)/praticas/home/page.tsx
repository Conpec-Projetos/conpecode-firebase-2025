"use client";
import Card from "@/components/card";
import { useState } from "react";

/*
  --------------------------------------------------------------
    AJUSTE O COMPONENTE Card EM src/components/card.tsx
  --------------------------------------------------------------
*/

export default function Home() {
  const[checked, setChecked] = useState<number>(0);

  const [activitiesDone, setActivitiesDone] = useState<number>(0);


  return (
    <main className="min-h-screen min-w-fit flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-conpec-orange-faded to-conpec-orange-strong select-none">
      <h1 className="text-4xl font-bold text-conpec-gray hover:text-conpec-white transition-colors">
        Atividades Completas: {checked}
      </h1>
      <h2 className="text-xl font-semibold text-conpec-gray hover:text-conpec-white transition-colors">
        Marque as atividades que você finalizar
      </h2>

      <div className="flex flex-col items-center gap-2 w-1/2 h-fit">
        <Card 
          setCounter={setChecked}
          activityName="API"
          activityDescription="Alguma atividade ai"
          activityLink="/praticas/api"
          activityTemplateLink="/gabaritos/api"
          dificulty="EASY"
        />
        <Card
          setCounter={setChecked}
          activityName="Contador"
          activityDescription="Alguma atividade ai ... 2!"
          activityLink="/praticas/contador-limite"
          activityTemplateLink="/gabaritos/contador-limite"
          dificulty="VERY HARD"
        />
      </div>
    </main>
  );
}
