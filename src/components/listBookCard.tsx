import { Book } from "@/util/entities";
import { useState } from "react";

interface ListBookCardProps {
    livro: Book;
    setLivros: React.Dispatch<React.SetStateAction<Book[]>>;
    index: number;
}

export default function ListBookCard({livro, setLivros, index}: ListBookCardProps) {
    const [genero, setGenero] = useState<string>("");

    return (
        <div className="relative h-[250px] w-1/3 flex flex-col items-start justify-start bg-conpec-white border rounded-3xl px-[5%] py-[1%] gap-2 flex-shrink-0">
            <div>
                <div className="font-bold text-[16px]">nome:   
                    <span className="font-normal">
                    <input className="border border-gray-300 rounded-md px-3 py-0.5 ml-1"
                        placeholder="nome do livro"
                        type="text"
                        value={livro.name}
                        onChange={(e) => setLivros(prev => {
                            const updated = [...prev];
                            updated[index] = { ...updated[index], name: e.target.value };
                            return updated;
                        })}
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
                        onChange={(e) => setLivros(prev => {
                            const updated = [...prev];
                            updated[index] = { ...updated[index], pages: Number(e.target.value) };
                            return updated;
                        })}
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
                        setLivros((prev) => {
                            const updated = [...prev];
                            updated[index] = { ...updated[index], isBestSeller: e.target.value === "true" };
                            return updated;
                        })
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
                            setLivros(prev => {
                                const updated = [...prev];
                                updated[index] = { 
                                    ...updated[index], 
                                    genres: (genero.trim() !== "" && !updated[index].genres.includes(genero)) 
                                        ? [...updated[index].genres, genero] 
                                        : updated[index].genres
                                };
                                return updated;
                            });
                            setGenero("");
                            }}>
                            add
                        </button>
                    </div>
                </div>

                <div className="mt-1.5 flex flex-wrap gap-1.5 max-h-20 overflow-y-auto scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-orange-100">
                    {livro.genres.length > 0 &&
                    livro.genres.map((generoAtual, idx) => (
                        <div className="flex items-center" key={idx}>
                        <span className="bg-orange-200 rounded-lg p-1 hover:bg-orange-300 flex items-center" key={idx}>
                            {generoAtual}
                            <button className="cursor-pointer ml-1.5"
                                onClick={()=>{
                                    setLivros(prev => {
                                        const updated = [...prev];
                                        updated[index] = { ...updated[index], genres: updated[index].genres.filter(gen => gen !== generoAtual) };
                                        return updated;
                                    }
                                )
                            }}>
                                <img src="/delete.png" alt="x" className="w-[15px] h-[15px]" />
                            </button>
                        </span>
                        </div>
                    ))}
                </div>
            </div> 

            <div className="absolute top-2 right-3">
                <button 
                    className="cursor-pointer ml-1.5"
                    onClick={() => setLivros(prev => prev.filter((_, i) => i !== index))}
                >
                    <img src="/delete.png" alt="x" className="w-[30px] h-[30px]" />
                </button>
            </div>
                
        </div>
    );

}

