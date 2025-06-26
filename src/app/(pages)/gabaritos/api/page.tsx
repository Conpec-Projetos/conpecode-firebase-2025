"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
interface PokemonData {
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
}

export default function PokemonApi() {
  const [data, setData] = useState<PokemonData | null>(null);
  const [bgColor, setBgColor] = useState("bg-blue-500");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      {data ? (
        <div className={`flex flex-col items-center justify-center w-full h-screen ${bgColor}`}>
          <h1 className="text-2xl font-bold">Pokemon API</h1>
            <PokemonCard
              name={data.name}
              height={data.height}
              weight={data.weight}
              sprites={data.sprites}
          />
          <button
            className={`px-4 py-2 mt-4 text-white rounded cursor-pointer ${bgColor === "bg-blue-500" ? "bg-green-500" : "bg-blue-500"}`}
            onClick={() => {
              setBgColor(bgColor === "bg-blue-500" ? "bg-green-500" : "bg-blue-500");
            }}
          >
            {bgColor === "bg-blue-500" ? "Mudar para Verde" : "Mudar para Azul"}
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-screen">
          <h1 className="text-2xl font-bold">Carregando...</h1>
        </div>
      )}
    </>
  );
}

const PokemonCard = ({ name, height, weight, sprites }: PokemonData) => {
  return (
    <div className="mt-4 p-4 border rounded">
      <h2 className="text-xl font-semibold">Dados do Pokemon</h2>
      <p>
        <strong>Nome:</strong> {name}
      </p>
      <p>
        <strong>Altura:</strong> {height}
      </p>
      <p>
        <strong>Peso:</strong> {weight}
      </p>
      <Image src={sprites.front_default} alt={name} width={96} height={96} className="transition-transform hover:scale-150" />
    </div>
  );
};
