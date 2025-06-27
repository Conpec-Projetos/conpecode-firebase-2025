"use client";
import { useState } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/firebase-config";

export default function Delete() {
  
  const [id, setId] = useState<string>("");
  
  const collectionName = "write";  

  /*
  -------------------------------------------------------------------------
    Deletar o documento localizado no collection e id quando realizar a 
    função deleteBook
    Olhe as importações que não estão sendo usadas ainda
  -------------------------------------------------------------------------
  */

  const deleteBook = async () => {
    
  };


  return (
  
    <main className="h-screen w-screen flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-conpec-orange-faded to-conpec-orange-strong select-none">
      <button
        className="absolute top-6 right-8 cursor-pointer"
        title="Documentação"
        onClick={() => {
          window.open("https://firebase.google.com/docs/firestore/manage-data/delete-data?hl=pt-BR&authuser=1", "_blank");
        }}
      >
        <img src="/information-button.png" alt="Imagem" className="w-[40px] h-[40px]"/> 
      </button>
      {bookCard()}

      <button
        className="cursor-pointer bg-red-600 text-white px-4 py-2 mt-2.5 rounded hover:shadow-xl transition-all duration-300"
        onClick={() => {
          deleteBook();
        }}
      >
        Deletar Livro
      </button>

    </main>
    
  );

  function bookCard(){
    return (
      <div className="h-1/4 w-1/2 flex flex-col items-center justify-start bg-conpec-white border rounded-3xl px-[7%] py-[3%] gap-2 ">
        <div className="mb-4">
          <h1 className="text-xl font-semibold" >Deletar um documento da coleção write/</h1>
        </div>

        <div>
          <div className="font-bold text-[16px]">id documento:   
            <span className="font-normal">
              <input className="border border-gray-300 rounded-md px-3 py-0.5 ml-1"
                placeholder="id do documento"
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </span>
          </div>
        </div>        
      </div>
    );

  }
}
