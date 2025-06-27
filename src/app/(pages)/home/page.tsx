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
          activityName="Ler documento"
          dificulty="EASY"
          setCounter={setActivitiesDone}
          activityLink="/praticas/ler-doc"
          activityTemplateLink="/gabaritos/ler-doc"
          activityDescription="Leia um documento do firestore"
        />
        <Card
          activityName="Escrever documento"
          dificulty="EASY"
          setCounter={setActivitiesDone}
          activityLink="/praticas/escrever-doc"
          activityTemplateLink="/gabaritos/escrever-doc"
          activityDescription="Escreva um documento do firestore"
        />
        <Card
          activityName="Atualizar documento"
          dificulty="EASY"
          setCounter={setActivitiesDone}
          activityLink="/praticas/update-doc"
          activityTemplateLink="/gabaritos/update-doc"
          activityDescription="Leia um documento do firestore e mude seus valores"
        />
        <Card
          activityName="Deletar documento"
          dificulty="EASY"
          setCounter={setActivitiesDone}
          activityLink="/praticas/delete-doc"
          activityTemplateLink="/gabaritos/delete-doc"
          activityDescription="Remova um documento do firestore"
        />
        <Card
          activityName="Ler coleção"
          dificulty="MEDIUM"
          setCounter={setActivitiesDone}
          activityLink="/praticas/ler-col"
          activityTemplateLink="/gabaritos/ler-col"
          activityDescription="Leia todos os documentos em uma coleção"
        />
        <Card
          activityName="Filtrar coleção"
          dificulty="HARD"
          setCounter={setActivitiesDone}
          activityLink="/praticas/filter-col"
          activityTemplateLink="/gabaritos/filter-col"
          activityDescription="Leia todos os documentos de uma coleção que passem pelo filtro"
        />
        <Card
          activityName="Cadastro"
          dificulty="EASY"
          setCounter={setActivitiesDone}
          activityLink="/praticas/signup"
          activityTemplateLink="/gabaritos/signup"
          activityDescription="Faça um cadastro de um novo usuário. Verifique se funcionou no gabarito da tarefa de login e logout"
        />
        <Card
          activityName="Login e Logout"
          dificulty="MEDIUM"
          setCounter={setActivitiesDone}
          activityLink="/praticas/login"
          activityTemplateLink="/gabaritos/login"
          activityDescription="Faça um sistema de login e logout"
        />
      </div>

      <button
        className="fixed bottom-8 left-15 cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:shadow-xl transition-all duration-300"
        onClick={() => {
          window.open("https://console.firebase.google.com/u/1/project/conpecode-firebase/overview", "_blank");
        }}
      >
        Acessar Firebase
      </button>
    </main>
  );
}
