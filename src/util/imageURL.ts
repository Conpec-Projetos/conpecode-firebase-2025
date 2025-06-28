import { db } from "@/firebase/firebase-config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Dispatch, SetStateAction } from "react";

const collectionName = "imageURL"
const docId = "image"

export function sendURL(url: string){
    const docRef = doc(db, collectionName, docId);

    setDoc(docRef, {imageURL: url});
}

export async function getURL(setURL: Dispatch<SetStateAction<string | undefined>>){
    const docRef = doc(db, collectionName, docId);
    const docSnap = await getDoc(docRef);

    setURL(docSnap.data()?.imageURL);
}



