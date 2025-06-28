"use client";
import { useState } from "react";
import { storage } from "@/firebase/firebase-config";
import InfoButton from "@/components/info-button";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { getURL, sendURL } from "@/util/imageURL";

export default function Upload() {
  const [imageURL, setImageURL] = useState<string | undefined>("");
  const [file, setFile] = useState<File | undefined>();
  const [loading, setLoading] = useState(false);

  const folderPath = "images/";

  /*
  -------------------------------------------------------------------------
    Envie o arquivo 'file' para o storage o envie a url da imagem para a
    função 'sendURL
    Olhe as importações que não estão sendo usadas ainda
  -------------------------------------------------------------------------
  */

  const uploadImage = async () => {
    if (!file) return;
    setLoading(true);

    // Faça o código aqui !

    await getURL(setImageURL);
    setLoading(false);
  };


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    } else {
      setFile(undefined);
    }
  };


  return (
  
    <main className="h-screen w-screen flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-conpec-orange-faded to-conpec-orange-strong select-none">
      <InfoButton link="https://firebase.google.com/docs/storage/web/upload-files?hl=pt-BR&authuser=1" label="Consulte a documentação" />
      {bookCard()}

      <button
        className={` ${file ? "bg-blue-500 hover:bg-blue-700 hover:shadow-xl cursor-pointer" : "bg-blue-300"}  text-white px-4 py-2 mt-2.5 rounded transition-all duration-300`}
        onClick={() => {
          uploadImage();
          
        }}
        disabled={!file}
      >
        Upload Imagem
      </button>

    </main>
    
  );

  function bookCard(){
    return (
      <div className="h-1/2 w-1/2 flex flex-col items-start justify-start bg-conpec-white border rounded-3xl px-[7%] py-[3%] gap-2 ">
        <div>
          <div className="font-bold text-[16px]">escolha um arquivo:   
            <span className="font-normal">

              <input className="border border-gray-300 rounded-md px-3 py-0.5 ml-1"
                type="file"
                accept="image/*"
                onChange={handleFileChange}  
              />

            </span>
          </div>
        </div>

        {loading 
          ? <div className="flex items-center justify-center w-full h-32">
              <span className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mr-2"></span>
              <span className="text-blue-500 font-semibold">Carregando...</span>
            </div>
          : imageURL && (
            <div className="mt-2 max-h-100 overflow-hidden flex items-center">
              <img
                src={imageURL}
                alt="Preview"
                className="max-w-full max-h-100 object-contain block mx-auto"
              />
            </div>
          )
        }


        
      </div>
    );

  }
}
