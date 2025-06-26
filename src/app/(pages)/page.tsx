"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function App() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-b from-conpec-orange-faded to-conpec-orange-strong">
      <Button
        className="bg-conpec-blue text-conpec-white hover:bg-conpec-black hover:scale-125 transition-all duration-300 cursor-pointer"
        onClick={() => router.push("/home")}
      >
        Ir para Home
      </Button>
    </div>
  );
}