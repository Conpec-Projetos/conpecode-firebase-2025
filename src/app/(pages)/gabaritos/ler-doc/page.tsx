"use client";
import { useEffect, useState } from "react";
import { Book, ObjectToBook } from "@/util/entities"
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase-config";

export default function Read() {
  const [livro, setLivro] = useState<Book>({
    name: "",
    pages: 0,
    isBestSeller: false,
    genres: [],
    id: ""
  } as Book);
  const [error, setError] = useState<boolean>(false);

  const collection = "read";
  const id = "JA6VTalCAwyNTd8eyeqb";

  useEffect(() => {
    const fetchBook = async () => {
      const docRef = doc(db, collection, id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setLivro(ObjectToBook(docSnap.data()));
      } else {
        setError(true);
      }
    };

    fetchBook();
  },[]);


  return (
  
    <main className="h-screen w-screen flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-conpec-orange-faded to-conpec-orange-strong select-none">
      <button
        className="absolute top-6 right-8 cursor-pointer"
        title="Documentação"
        onClick={() => {
          window.open("https://firebase.google.com/docs/firestore/query-data/get-data?hl=pt-BR&authuser=1#web_2", "_blank");
        }}
      >
        <img src="/information-button.png" alt="Imagem" className="w-[40px] h-[40px]"/> 
      </button>
      {error ? <div>Documento não existe</div> : bookCard(livro)}
    </main>
    
  );

  function bookCard(livro: Book){
    return livro ? (
      <div className="h-1/3 w-1/2 flex flex-col items-start justify-start bg-conpec-white border rounded-3xl px-[7%] py-[3%] gap-2 ">
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
