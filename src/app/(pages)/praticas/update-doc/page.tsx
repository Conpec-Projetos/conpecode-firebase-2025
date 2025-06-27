"use client";
import { useEffect, useState } from "react";
import { Book, ObjectToBook } from "@/util/entities"
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase-config";

export default function Update() {
  const [livro, setLivro] = useState<Book>({
    name: "",
    pages: 0,
    isBestSeller: false,
    genres: [],
    id: ""
  } as Book);
  const [genero, setGenero] = useState<string>("");
  const [error, setError] = useState<boolean>(false);


  const collectionName = "update";
  const id = "0XAUdX3eKdyzGXbKGGyB";

  /*
  -------------------------------------------------------------------------
    Leia o documento localizado no collection e id quando carregar a tela
    Atualize o documento quando realizar a função updateBook
    Olhe as importações que não estão sendo usadas ainda
  -------------------------------------------------------------------------
  */

  useEffect(() => {
    
  },[]);

  const updateBook = async () => {
    
  };


  return (
  
    <main className="h-screen w-screen flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-conpec-orange-faded to-conpec-orange-strong select-none">
      <button
        className="absolute top-6 right-8 cursor-pointer"
        title="Documentação"
        onClick={() => {
          window.open("https://firebase.google.com/docs/firestore/manage-data/add-data?hl=pt-BR&authuser=1", "_blank");
        }}
      >
        <img src="/information-button.png" alt="Imagem" className="w-[40px] h-[40px]"/> 
      </button>
      {error ? <div>Documento não existe</div> : bookCard(livro)}

      {!error && (
        <button
          className="cursor-pointer bg-blue-500 text-white px-4 py-2 mt-2.5 rounded hover:shadow-xl transition-all duration-300"
          onClick={() => {
        updateBook();
          }}
        >
          Atualizar Livro
        </button>
      )}

    </main>
    
  );

  function bookCard(livro: Book){
    return livro ? (
      <div className="h-1/3 w-1/2 flex flex-col items-start justify-start bg-conpec-white border rounded-3xl px-[7%] py-[3%] gap-2 ">
        <div>
          <div className="font-bold text-[16px]">nome:   
            <span className="font-normal">
              <input className="border border-gray-300 rounded-md px-3 py-0.5 ml-1"
                placeholder="nome do livro"
                type="text"
                value={livro.name}
                onChange={(e) => setLivro(prev => ({ ...prev, name: e.target.value }))}
              />
            </span>
          </div>
        </div>

        <div>
          <div className="font-bold text-[16px]">páginas:   
            <span className="font-normal">
              <input className="border border-gray-300 rounded-md px-3 py-0.5 ml-1 w-[80px]"
                min={0}
                type="number"
                value={livro.pages}
                onChange={(e) => setLivro(prev => ({ ...prev, pages: Number(e.target.value) }))}
              />
            </span>
          </div>
        </div>

        <div>
          <div className="font-bold text-[16px]">BestSeller:   
            <span className="font-normal">
              <select
                name="BestSeller"
                id="BestSeller"
                value={livro.isBestSeller ? "true" : "false"}
                onChange={(e) =>
                  setLivro((prev) => ({
                    ...prev,
                    isBestSeller: e.target.value === "true",
                  }))
                }
              >
                <option value="true">VERDADEIRO</option>
                <option value="false">FALSO</option>
              </select>
            </span>
          </div>
        </div>

        <div>
          <div>
            <div className="font-bold text-[16px]">gêneros:
              <span className="font-normal">
                <input className="border border-gray-300 rounded-md px-3 py-0.5 mx-1 w-[80px]"
                  placeholder="gênero do livro"
                  min={0}
                  type="text"
                  value={genero}
                  onChange={(e) => setGenero(e.target.value)}
                />
              </span>
              <button
                className="bg-orange-100 cursor-pointer px-1 ml-1.5 w-10 hover:bg-amber-300"
                onClick={()=>{
                  setLivro(prev => (
                    {...prev, 
                      genres: (genero.trim() !== "" && !prev.genres.includes(genero)) ? [...prev.genres, genero] : prev.genres
                    }
                  ));
                  setGenero("");
                  }}>
                  add
              </button>
            </div>
          </div>

            <div className="mt-1.5 flex flex-wrap gap-1.5 max-h-24 overflow-y-auto scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-orange-100">
              {livro.genres.length > 0 &&
              livro.genres.map((generoAtual, idx) => (
                <div className="flex items-center" key={idx}>
                  <span className="bg-orange-200 rounded-lg p-1 hover:bg-orange-300 flex items-center" key={idx}>
                    {generoAtual}
                    <button className="cursor-pointer ml-1.5"
                      onClick={()=>{setLivro(prev=>({...prev, genres:prev.genres.filter(gen => gen !== generoAtual)}))}}>
                        <img src="/delete.png" alt="x" className="w-[15px] h-[15px]" />
                    </button>
                  </span>
                </div>
              ))}
            </div>
        </div>
        
      </div>
    ) : (
      <div>Carregando...</div>
    );

  }
}
