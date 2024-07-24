import { eliminarComponentes, obtenerComponentes } from '@/Firebase/promesas'
import { componentes } from '@/Interfaces/Interfaces'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import Link from 'next/link';
import { FaDeleteLeft } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";

const tabla_datos = () => {
    const [componentes, setComponentes] = useState<componentes[]>([])
    useEffect(()=>{
        obtenerComponentes().then((componentes)=>{
            setComponentes(componentes)
        }).catch(()=>{
            alert("No se logra cargar los datos")
        })
    },[])

const handleEliminar = async(key: string) => {
    if(confirm("seguro de que elimminar estos componenetes?" )){
        await eliminarComponentes(key).then(()=>{
            obtenerComponentes();
        })
    }
        
}

  return (
    <>
      <Table striped bordered hover>
        <thead>
            <tr>
                <th>placa</th>
                <th>procesador</th>
                <th>fuente</th>
                <th>gabinete</th>
                <th>ram</th>
                <th>grafica</th>
                <th>almacenamiento</th>
            </tr>
        </thead>
        <tbody>
            {
                componentes.map((p)=>{
                    return(
                        <tr >
                            <td>{p.placa}</td>
                            <td>{p.procesador}</td>
                            <td>{p.fuente}</td>
                            <td>{p.gabinete}</td>
                            <td>{p.ram}</td>
                            <td>{p.grafica}</td>
                            <td>{p.almacenamiento}</td>
                            <td>
                                <Link href={{pathname:"Modificar_componentes",query:{key:p.key}}}>
                                        <button ><CiEdit /></button>
                                </Link>
                                <button onClick={() => handleEliminar(p.key)}><FaDeleteLeft /></button>
                                        
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
      </Table>
    </>
  )
}

export default tabla_datos
