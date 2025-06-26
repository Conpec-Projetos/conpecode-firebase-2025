"use client";
import { useState } from "react";

interface User {
  id: number;
  name: string;
  isActive: boolean;
}

const mockUsers: User[] = [
  { id: 1, name: "Zé de Votuporanga", isActive: true },
  { id: 2, name: "João de Boituva", isActive: false },
  { id: 3, name: "Votuporanguinho", isActive: true },
  { id: 4, name: "Gustavo de Água Vermelha", isActive: false },
];

export default function HomePage() {
  const [onlyActive, setOnlyActive] = useState(false);

  const displayedUsers = mockUsers;

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-conpec-orange-faded to-conpec-orange-strong select-none">
      <h1 className="text-conpec-white text-4xl">Lista de Usuários</h1>

      <button
        onClick={() => setOnlyActive(!onlyActive)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:shadow-xl cursor-pointer transition-all duration-300"
      >
        {onlyActive ? "Mostrar Todos" : "Mostrar Apenas Ativos"}
      </button>

      <ul className="flex flex-col gap-2">
        {displayedUsers
          .filter((user)=> (onlyActive)? (user.isActive):true)
          .map((user)=> userItem(user) )
        }
      </ul>
    </div>
  );
}

const userItem = (user: User) => {
  return (
    <li
      key={user.id}
      className="bg-conpec-white p-4 rounded shadow-lg hover:shadow-xl  transition-all duration-300 transform hover:scale-105 cursor-zoom-in"
    >
      {user.name} —{" "}
      <strong className={user.isActive ? "text-green-500" : "text-red-500"}>
        {user.isActive ? "Ativo" : "Inativo"}
      </strong>
    </li>
  );
};
