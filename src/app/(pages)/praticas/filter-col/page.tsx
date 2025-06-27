"use client";
import { useEffect, useState } from "react";
import { Book, ObjectToBook } from "@/util/entities"
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/firebase-config";

export default function Filter() {
  const [livros, setLivros] = useState<Array<Book>>([]);
  const [filtro, setFiltro] = useState<string>("");

  const collectionName = "read";
  const filters = ["Fantasia", "Ficção", "Suspense", "Terror", "Drama", "Distopia", "Mistério", "Aventura"];

  /*
  -------------------------------------------------------------------------
    Leia todos os documento em collectionName que forma validados pelo filtro
    Observe que o filtro somente occore quando a tela é carregada, então
    é melhor apenas pegar os documentos filtrados do que coletar todos os
    documentos em uma lista local e depois filtrá-los
    Olhe as importações que não estão sendo usadas ainda
  -------------------------------------------------------------------------
  */

  useEffect(() => {
    const randomFilter = (filters[Math.floor(Math.random() * filters.length)]); //filtro aleatório
    setFiltro(randomFilter);

  },[]);


  return (
  
    <main className="h-screen w-screen flex flex-col items-center justify-start gap-4 bg-gradient-to-b from-conpec-orange-faded to-conpec-orange-strong select-none overflow-y-auto overflow-x-hidden">
      <button
      className="absolute top-6 right-8 cursor-pointer"
      title="Documentação"
      onClick={() => {
        window.open("https://firebase.google.com/docs/firestore/query-data/queries?hl=pt-BR&authuser=1", "_blank");
      }}
      >
      <img src="/information-button.png" alt="Imagem" className="w-[40px] h-[40px]"/> 
      </button>

      <div className="text-5xl font-extrabold">Filtro ativo: {filtro}</div>
      <div className="flex flex-col items-center justify-start gap-2 w-screen my-3">
      {livros.map((livro, idx) => {
        return bookCard(livro, idx);
      })}
      </div>
    </main>
    
  );

  function bookCard(livro: Book, index:number){
    return livro ? (
      <div className="h-[220px] w-1/3 flex flex-col items-start justify-start bg-conpec-white border rounded-3xl px-[5%] py-[1%] gap-2 " key={index}>
        <div>
          <div className="font-bold text-[16px]">nome: <span className="font-normal">{livro.name}</span></div>
        </div>
        <div>
          <div className="font-bold text-[16px]">páginas: <span className="font-normal">{livro.pages}</span></div>
        </div>
        <div>
          <div className="font-bold text-[16px]">BestSeller: <span className="font-normal">{livro.isBestSeller ? "✅" : "🚫"}</span></div>
        </div>

        <div>
          <div className="font-bold text-[16px]">gêneros: </div>

          <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-orange-100">
            {!(livro.genres.length === 0) &&
              livro.genres.map((genero, idx) => (
              <span className="bg-orange-200 rounded-lg p-1 hover:bg-orange-300" key={idx}>{genero}</span>
            ))}
          </div>
        </div>
        
        
      </div>
    ) : (
      <div>Carregando...</div>
    );

  }
}
