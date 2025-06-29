import {
    Info
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface InfoButtonProps {
    link: string;
    label: string;
}

export default function InfoButton({link, label}: InfoButtonProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="absolute top-6 right-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                onClick={() => {
                    window.open(link, '_blank');
                }}
                className={`
                absolute top-0 right-15 z-10 
                bg-conpec-white rounded-lg p-3 shadow-lg
                transition-all duration-300 ease-in-out
                ${isHovered 
                    ? 'opacity-100 translate-x-0 cursor-pointer' 
                    : 'opacity-0 translate-x-5 pointer-events-none'
                }
            `}>
                <p className="text-conpec-black text-sm font-medium whitespace-nowrap">
                    {label}
                </p>
                <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 
                              w-0 h-0 border-l-8 border-l-conpec-white 
                              border-t-4 border-t-transparent 
                              border-b-4 border-b-transparent">
                </div>
            </div>

            <Link
                href={link}
                target="_blank"
                className="cursor-pointer relative z-20"
                title={label}
            >
                <Info className="text-conpec-white hover:text-conpec-blue transition-colors" size={50} />
            </Link>
        </div>
    );

}

