import { initialStateComponentes } from '@/EstadoInicial/Componentes'
import { modificarcomponentes, obtenerComponentes, obtenerComponentesid } from '@/Firebase/promesas'
import { componentes } from '@/Interfaces/Interfaces'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const Modificar_componentes = () => {
    const [componentes,setComponentes] = useState<componentes>(initialStateComponentes)
    const handleComponentes = (name:string,value:string)=>{
        setComponentes({...componentes,[name]:value})
    }
    const router = useRouter()
    useEffect(()=>{
        const key = router.query.key;
        if(typeof key == "string"){
            obtenerComponentesid(key).then((p)=>{
                if(p!=undefined){
                    setComponentes(p)
                }else{

                }
            })
        }else{

        }
        },[])
const hanldeModificar = ()=>{
    modificarcomponentes(componentes).then(()=>{
        alert("se modificao con exito")
    }).catch((e)=>{
        alert("algo ocurrio")
    })
}
  
    return (
    <>
      {/* placa */}
      <Form.Group>
      <Form.Label> placa: </Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Ingrese placa"
                name="placa"
                value={componentes.placa}
                onChange={(e)=>handleComponentes(e.currentTarget.name,e.currentTarget.value)}/>
                <Form.Text></Form.Text>
      </Form.Group>
    {/* procesador */}
      <Form.Group>
      <Form.Label> procesador: </Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Ingrese Procesador"
                name="procesador"
                value={componentes.procesador}
                onChange={(e)=>handleComponentes(e.currentTarget.name,e.currentTarget.value)}/>
                <Form.Text></Form.Text>
      </Form.Group>
    {/* fuente */}
      <Form.Group>
      <Form.Label> fuente: </Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Ingrese fuente"
                name="fuente"
                value={componentes.fuente}
                onChange={(e)=>handleComponentes(e.currentTarget.name,e.currentTarget.value)}/>
                <Form.Text></Form.Text>
      </Form.Group>
    {/* gabinete */}
      <Form.Group>
      <Form.Label> gabinete: </Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Ingrese gabinete"
                name="gabinete"
                value={componentes.gabinete}
                onChange={(e)=>handleComponentes(e.currentTarget.name,e.currentTarget.value)}/>
                <Form.Text></Form.Text>
      </Form.Group>
    {/* ram */}
      <Form.Group>
      <Form.Label> ram: </Form.Label>
                <Form.Control 
                type="number" 
                placeholder="Ingrese ram"
                name="ram"
                value={componentes.ram}
                onChange={(e)=>handleComponentes(e.currentTarget.name,e.currentTarget.value)}/>
                <Form.Text></Form.Text>
      </Form.Group>
    {/* grafica */}
      <Form.Group>
      <Form.Label> grafica: </Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Ingrese grafica"
                name="grafica"
                value={componentes.grafica}
                onChange={(e)=>handleComponentes(e.currentTarget.name,e.currentTarget.value)}/>
                <Form.Text></Form.Text>
      </Form.Group>
    {/* almacenamiento */}
      <Form.Group>
      <Form.Label> almacenamiento: </Form.Label>
                <Form.Control 
                type="number" 
                placeholder="Ingrese almacenamiento"
                name="almacenamiento"
                value={componentes.almacenamiento}
                onChange={(e)=>handleComponentes(e.currentTarget.name,e.currentTarget.value)}/>
                <Form.Text></Form.Text>
      </Form.Group>
      
      
      <Button type="button" onClick={hanldeModificar}>modificar </Button>
    </>
  )
}

export default Modificar_componentes
