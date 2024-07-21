import { addDoc, collection } from "firebase/firestore"
import { db } from "./firebase"
import { Componentes } from "@/Interfaces/Interfaces"


export const registrarComponentes = async(componentes:Componentes)=>{
    try{
    const docRef = await addDoc(collection(db,"componentes"),componentes)
    alert("Registrado con exito");
    return docRef;
    }catch(err){
    alert("debe rellenar todos los campos")
    };
}