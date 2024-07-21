import { addDoc, collection, doc, getDocs,getDoc, updateDoc } from "firebase/firestore"
import { db } from "./firebase"
import { componentes } from "@/Interfaces/Interfaces"


export const registrarComponentes = async(componentes:componentes)=>{
    try{
    const docRef = await addDoc(collection(db,"componentes"),componentes)
    alert("Registrado con exito");
    return docRef;
    }catch(err){
    alert("debe rellenar todos los campos")
    };
}