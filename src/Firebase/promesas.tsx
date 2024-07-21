import { addDoc, collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import { componentes } from "@/Interfaces/Interfaces";

export const registrarComponentes = async (componentes: componentes) => {
        const docRef = await addDoc(collection(db, "componentes"), componentes);
        return docRef;

};

export const obtenerComponentes = async () => {
        const querySnapshot = await getDocs(collection(db, "componentes"));
        let componentes: componentes[] = [];
        querySnapshot.forEach((doc) => {
            let componente: componentes = {
                placa: doc.data().placa,
                procesador: doc.data().procesador,
                fuente: doc.data().fuente,
                gabinete: doc.data().gabinete,
                ram: doc.data().ram,
                grafica: doc.data().grafica,
                almacenamiento: doc.data().almacenamiento,
                key: doc.id
            };
            componentes.push(componente);
        });
        return componentes;
};

export const obtenerComponentesid = async(key:string)=>{
    const docRef = doc(db,"componentes",key);
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()){
        let componentes:componentes = {
            placa:docSnap.data().placa,
            procesador:docSnap.data().procesador,
            fuente:docSnap.data().fuente,
            gabinete:docSnap.data().gabinete,
            ram:docSnap.data().ram,
            grafica:docSnap.data().grafica,
            almacenamiento:docSnap.data().almacenamiento
        }
        return componentes
    }else{
        return undefined
}
}


export const modificarcomponentes = async(componentes:componentes)=>{
    const ref = doc(collection(db,"componentes"),componentes.key)
    await updateDoc(ref,{
        placa:componentes.placa,
        procesador:componentes.procesador,
        fuente:componentes.fuente,
        gabinete:componentes.gabinete,
        ram:componentes.ram,
        grafica:componentes.grafica,
        almacenamiento:componentes.almacenamiento,
    })
}