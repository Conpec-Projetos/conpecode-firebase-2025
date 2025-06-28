"use client";
import { useState } from "react";
import { Book } from "@/util/entities"
import { collection, doc, writeBatch } from "firebase/firestore";
import { db } from "@/firebase/firebase-config";
import InfoButton from "@/components/info-button";
import ListBookCard from "@/components/listBookCard";
import { Plus } from "lucide-react";

export default function WriteCol() {
  const [livros, setLivros] = useState<Array<Book>>([ {
      name: "",
      pages: 0,
      isBestSeller: false,
      genres: [],
      id: ""
    } ]);
  
  const collectionName = "write";

  const uploadListBooks = async () => {
    const invalidBooks = livros.filter(
      (livro) =>
      livro.name.trim() === "" ||
      livro.pages === 0 ||
      livro.genres.length === 0
    );

    if (invalidBooks.length > 0) {
      alert(
      `${invalidBooks.length} livro(s) estão incompletos.`
      );
    } else {
      const batch = writeBatch(db);
      const collectionRef = collection(db, collectionName);

      livros.forEach((livro) => {
        const newDocRef = doc(collectionRef);
        const id = newDocRef.id;

        const livroComId = { ...livro, id:id };
        batch.set(newDocRef, livroComId);
        
      });

      try{
        await batch.commit();
      } catch(error){
        console.error("Batch falhou: " + error);
      }
      

      setLivros([ {
        name: "",
        pages: 0,
        isBestSeller: false,
        genres: [],
        id: ""
      } ]);
    }
  }

  const addBook = () => {
    setLivros(prev => (
      [...prev, {
        name: "",
        pages: 0,
        isBestSeller: false,
        genres: [],
        id: ""
      }]
    ));
  };



  return (
  
    <main className="h-screen w-screen flex flex-col items-center justify-start gap-4 bg-gradient-to-b from-conpec-orange-faded to-conpec-orange-strong select-none overflow-y-auto overflow-x-hidden pt-2">
      <InfoButton link="https://firebase.google.com/docs/firestore/manage-data/transactions?hl=pt-BR&authuser=1" label="Consulte a documentação" />
      
      {livros.map((livro, idx) => {
        return <ListBookCard livro={livro} setLivros={setLivros} index={idx} key={idx} />;
      })}
     

      <div className="flex flex-row gap-2 items-end justify-center my-2.5">
        <button
          className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white px-4 py-2  rounded hover:shadow-xl transition-all duration-300"
          onClick={() => {
            uploadListBooks();
          }}
        >
          Enviar Livro(s)
        </button>

        <button
          onClick={addBook}
          className="flex items-center justify-center bg-blue-500 text-white rounded-full w-10 h-10 hover:bg-blue-700 transition cursor-pointer"
          style={{ aspectRatio: "1 / 1" }}
        >
          <Plus size={20} />
        </button>
      </div>
      



    </main>
    
  );

}
