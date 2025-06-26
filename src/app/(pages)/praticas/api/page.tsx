"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Card from "@/components/card";
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
  const [color, setColor] = useState<String>("blue");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/eevee");
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, []);
  

  return (
    <>
      <div className={`bg-${color}-500`}>
        <div className={`flex flex-col items-center justify-center w-full h-screen`}>
          <h1 className="text-2xl font-bold">Pokemon API</h1>
          {(data != null) && PokemonCard(data!)}
          <button
            className={`px-4 py-2 mt-4 text-white border-conpec-orange border-1 rounded cursor-pointer bg-${(color == "blue")? "green":"blue"}-500`}
            onClick={()=>(color == "blue")? setColor("green"):setColor("blue")}
          >
            Mudar para {(color == "blue")? "verde":"azul"}
          </button>
        </div>
      </div>
    </>
  );
}

const PokemonCard = ({ name, height, weight, sprites }: PokemonData) => {
  return (
    <div className="mt-4 p-4 border rounded transition-transform hover:scale-105">
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
