"use client";
import Card from "@/components/gabaritos/card";
import { useState } from "react";

export default function Home() {
  const [activitiesDone, setActivitiesDone] = useState<number>(0);

  return (
    <main className="py-2 min-h-screen min-w-fit flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-conpec-orange-faded to-conpec-orange-strong select-none">
      <h1 className="text-4xl font-bold text-conpec-gray hover:text-conpec-white transition-colors">
        Atividades Completas: {activitiesDone}
      </h1>
      <h2 className="text-xl font-semibold text-conpec-gray hover:text-conpec-white transition-colors">
        Marque as atividades que você finalizar
      </h2>

      <div className="flex flex-col items-center gap-2 w-1/2">
        <Card
          activityName="Contador Limite"
          dificulty="EASY"
          setCounter={setActivitiesDone}
          activityLink="/praticas/contador-limite"
          activityTemplateLink="/gabaritos/contador-limite"
          activityDescription="Mostre na tela quando o contador passar de 10"
        />
        <Card
          activityName="Usuários"
          dificulty="EASY"
          setCounter={setActivitiesDone}
          activityLink="/praticas/users"
          activityTemplateLink="/gabaritos/users"
          activityDescription="Liste todos os usuários e adicione um botão para mostrar apenas os ativos"
        />
        <Card
          activityName="API"
          dificulty="MEDIUM"
          setCounter={setActivitiesDone}
          activityLink="/praticas/api"
          activityTemplateLink="/gabaritos/api"
          activityDescription="Puxe os dados de uma API com useEffect e customize a cor da página"
        />
        <Card
          activityName="Home"
          dificulty="MEDIUM"
          setCounter={setActivitiesDone}
          activityLink="/praticas/home"
          activityTemplateLink="/gabaritos/home"
          activityDescription="Usando componentes, mostre na tela quantas atividades você completou"
        />
        <Card
          activityName="To-do List"
          dificulty="HARD"
          setCounter={setActivitiesDone}
          activityLink="/praticas/todo-list"
          activityTemplateLink="/gabaritos/todo-list"
          activityDescription="Faça uma To-do list usando conceitos de useState"
        />
        <Card
          activityName="Tempo Restante"
          dificulty="HARD"
          setCounter={setActivitiesDone}
          activityLink="/praticas/tempo-restante"
          activityTemplateLink="/gabaritos/tempo-restante"
          activityDescription="Faça o temporizador maluco do Valadares usando conceitos de useEffect"
        />
      </div>
    </main>
  );
}
