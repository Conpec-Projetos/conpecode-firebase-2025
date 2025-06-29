"use client";
import Card from "@/components/ui/card";
import { useState, useEffect } from "react";

export default function Home() {
  const [activitiesDone, setActivitiesDone] = useState<number>(0);
  const [completedActivities, setCompletedActivities] = useState<Set<string>>(new Set());

  useEffect(() => {
    const savedActivities = localStorage.getItem('completedActivities');
    if (savedActivities) {
      const activityArray: string[] = JSON.parse(savedActivities);
      const activitySet = new Set(activityArray);
      setCompletedActivities(activitySet);
      setActivitiesDone(activitySet.size);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('completedActivities', JSON.stringify(Array.from(completedActivities)));
  }, [completedActivities]);

  const handleActivityToggle = (activityName: string, isCompleted: boolean) => {
    setCompletedActivities(prev => {
      const newSet = new Set(prev);
      if (isCompleted) {
        newSet.add(activityName);
      } else {
        newSet.delete(activityName);
      }
      setActivitiesDone(newSet.size);
      return newSet;
    });
  };

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
          activityLink="/praticas/ler-doc"
          activityTemplateLink="/gabaritos/ler-doc"
          activityDescription="Leia um documento do firestore"
          isCompleted={completedActivities.has("Ler documento")}
          onToggleComplete={handleActivityToggle}
        />
        <Card
          activityName="Escrever documento"
          dificulty="EASY"
          activityLink="/praticas/escrever-doc"
          activityTemplateLink="/gabaritos/escrever-doc"
          activityDescription="Escreva um documento do firestore"
          isCompleted={completedActivities.has("Escrever documento")}
          onToggleComplete={handleActivityToggle}
        />
        <Card
          activityName="Atualizar documento"
          dificulty="EASY"
          activityLink="/praticas/update-doc"
          activityTemplateLink="/gabaritos/update-doc"
          activityDescription="Leia um documento do firestore e mude seus valores"
          isCompleted={completedActivities.has("Atualizar documento")}
          onToggleComplete={handleActivityToggle}
        />
        <Card
          activityName="Deletar documento"
          dificulty="EASY"
          activityLink="/praticas/delete-doc"
          activityTemplateLink="/gabaritos/delete-doc"
          activityDescription="Remova um documento do firestore. Caso necessário, consulte o id do documento no Console do Firebase ou utilize um código para buscá-lo."
          isCompleted={completedActivities.has("Deletar documento")}
          onToggleComplete={handleActivityToggle}
        />
        <Card
          activityName="Ler coleção"
          dificulty="MEDIUM"
          activityLink="/praticas/ler-col"
          activityTemplateLink="/gabaritos/ler-col"
          activityDescription="Leia todos os documentos em uma coleção"
          isCompleted={completedActivities.has("Ler coleção")}
          onToggleComplete={handleActivityToggle}
        />
        <Card
          activityName="Filtrar coleção"
          dificulty="HARD"
          activityLink="/praticas/filter-col"
          activityTemplateLink="/gabaritos/filter-col"
          activityDescription="Leia todos os documentos de uma coleção que passem pelo filtro"
          isCompleted={completedActivities.has("Filtrar coleção")}
          onToggleComplete={handleActivityToggle}
        />
        <Card
          activityName="Escrever coleção"
          dificulty="HARD"
          activityLink="/praticas/escrever-col"
          activityTemplateLink="/gabaritos/escrever-col"
          activityDescription="Escreva uma lista de documentos em uma coleção"
          isCompleted={completedActivities.has("Escrever coleção")}
          onToggleComplete={handleActivityToggle}
        />
        <Card
          activityName="Cadastro"
          dificulty="EASY"
          activityLink="/praticas/signup"
          activityTemplateLink="/gabaritos/signup"
          activityDescription="Faça um cadastro de um novo usuário. Verifique se funcionou no gabarito da tarefa de login e logout"
          isCompleted={completedActivities.has("Cadastro")}
          onToggleComplete={handleActivityToggle}
        />
        <Card
          activityName="Login e Logout"
          dificulty="MEDIUM"
          activityLink="/praticas/login"
          activityTemplateLink="/gabaritos/login"
          activityDescription="Faça um sistema de login e logout"
          isCompleted={completedActivities.has("Login e Logout")}
          onToggleComplete={handleActivityToggle}
        />
        <Card
          activityName="Upload uma imagem"
          dificulty="MEDIUM"
          activityLink="/praticas/upload-img"
          activityTemplateLink="/gabaritos/upload-img"
          activityDescription="Faça o upload de uma imagem e pegue o URL dela"
          isCompleted={completedActivities.has("Upload uma imagem")}
          onToggleComplete={handleActivityToggle}
        />
      </div>

      <button
        className="fixed bottom-8 left-15 cursor-pointer bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded hover:shadow-xl transition-all duration-300"
        onClick={() => {
          window.open("https://console.firebase.google.com/u/1/project/conpecode-firebase-2025/overview?hl=pt", "_blank");
        }}
      >
        Acessar Firebase do Conpecode
      </button>
    </main>
  );
}
