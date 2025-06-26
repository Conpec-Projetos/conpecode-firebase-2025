"use client";

import { useEffect, useState } from "react";

export default function Contador() {
  const tempoInicial = 10;
  const passoInicial = 1;

  const [tempoRestante, setTempoRestante] = useState(tempoInicial);
  const [passo, setPasso] = useState(passoInicial);

  useEffect(() => {
    setInterval(() => {
      // Decrementar o contador e verificar se chegou a zero      
      setTempoRestante((prev) => prev- passo);

    }, 1000);
  }, []);

  // Mostrar ao usuário que ele perdeu e reiniciar o jogo
  useEffect(()=>{
    if(tempoRestante < 0){
      alert(
        "Você Perdeu  :("
      );

      setPasso(passoInicial);
      setTempoRestante(tempoInicial)
    }
  }, [tempoRestante])
  // -----------------------
  // IMPLEMENTAR AQUI
  // -----------------------

  const fazerUpgrade = () => {
    // Aumentar o passo e diminuir o tempo restante
    
    setTempoRestante(tempoRestante - (passo*passo));
    setPasso((prev) => prev+1);

  };

  return (
    <div className="bg-white text-black flex flex-col items-center p-20 min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="mb-10">
        <h1 className="text-6xl font-bold text-[#F66C0E] mb-4">
          Tempo Restante
        </h1>
        <p className="text-center">Não deixe o timer zerar!</p>
      </div>
      <div className="flex flex-col items-center justify-center w-1/2">
        <p className={`text-6xl ${tempoRestante <= 5 && "text-red-600"}`}>
          {tempoRestante}
        </p>
        <p className={`mb-5 ${tempoRestante <= 5 && "text-red-600"}`}>
          {tempoRestante * tempoRestante == 1 ? "segundo" : "segundos"}
        </p>
        <div className="flex flex-col justify-between w-1/2">
          <button
            onClick={() => {
              setTempoRestante(tempoRestante+1);
            }}
            className="bg-green-500 hover:bg-green-600 text-white rounded p-2 text-xl mb-4"
          >
            Mais tempo
          </button>
          <button
            onClick={() => {
              setTempoRestante(tempoRestante-1);
            }}
            className="bg-red-500 hover:bg-red-600 text-white rounded p-2 text-xl mb-4"
          >
            Menos tempo
          </button>
          <button
            onClick={fazerUpgrade}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded p-2 text-xl"
          >
            Upgrade
          </button>
          <p className="text-blue-700">
            Aumentar passo para {passo+1} s
            <br />
            Você perderá {passo*passo} s
          </p>
        </div>
      </div>
    </div>
  );
}
