"use client";
import { useEffect, useState } from "react";

export default function Contador() {
  const [count, setCount] = useState(5);
  const [isAboveLimit, setIsAboveLimit] = useState(false);

  useEffect(() => {
    console.log("Contador atualizado:", count);
    if (count > 10) {
      setIsAboveLimit(true);
    } else {
      setIsAboveLimit(false);
    }
  }, [count]);


  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-conpec-orange-faded to-conpec-orange-strong select-none">
      <h1 className="text-4xl font-bold text-conpec-gray hover:text-conpec-white transition-colors">
        Contador: {count}
      </h1>
      {isAboveLimit && (
        <p className="text-conpec-black text-xl">Você ultrapassou o limite de 10!</p>
      )}
      <div className="flex gap-2">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-conpec-blue text-white px-4 py-2 rounded"
        >
          Incrementar
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="bg-conpec-blue text-white px-4 py-2 rounded"
        >
          Decrementar
        </button>
      </div>
    </main>
  );
}
