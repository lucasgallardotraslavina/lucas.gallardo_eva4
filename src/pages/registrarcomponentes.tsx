import { initialStateComponentes } from "@/EstadoInicial/Componentes"
import { registrarComponentes } from "@/Firebase/promesas"
import { Componentes } from "@/Interfaces/Interfaces"
import { useRouter } from "next/router"
import React, { useEffect, useState } from 'react'

const registrarcomponentes = () => {
    const [componentes,setComponentes] = useState<Componentes>(initialStateComponentes)
    const handleComponentes = (name:string,value:string)=>{
        setComponentes({...componentes,[name]:value})
    }
    const router = useRouter()
    useEffect(()=>{
        const key = router.query.key;
        if(typeof key == "string"){
            registrarComponentes(key).then((p)=>{
                if(p!=undefined){
                    setComponentes(p)
                }else{

                }
        })
    }else{

    }
    },[])
const hanldeModificar =() =>{
}






















  return (
    <>
      
    </>
  )
}

export default registrarcomponentes
