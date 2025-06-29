"use client";
import { useState } from "react";
import { storage } from "@/firebase/firebase-config";
import InfoButton from "@/components/info-button";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { getURL, sendURL } from "@/util/imageURL";
import Image from "next/image";

export default function Upload() {
  const [imageURL, setImageURL] = useState<string | undefined>("");
  const [file, setFile] = useState<File | undefined>();
  const [loading, setLoading] = useState(false);

  const folderPath = "images/";

  const uploadImage = async () => {
    if (!file) return;
    setLoading(true);

    try {
      const storageRef = ref(storage, folderPath + file.name);

      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      sendURL(url);
      
    } catch (error) {
      console.error("Upload failed:", error);
    }

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
      <div className="h-fit w-1/2 flex flex-col items-start justify-start bg-conpec-white border rounded-3xl px-[7%] py-[3%] gap-2 ">
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
            <div className="mt-2 h-52 w-52 relative">
              <Image
                src={imageURL}
                alt="Preview"
                fill
                className="object-cover rounded-md"
              />
            </div>
          )
        }


        
      </div>
    );

  }
}
