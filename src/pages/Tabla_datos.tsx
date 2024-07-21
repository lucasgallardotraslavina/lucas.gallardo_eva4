import { obtenerComponentes } from '@/Firebase/promesas'
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
            console.log(componentes)
            setComponentes(componentes)
        }).catch((e)=>{
            alert("No se logra cargar los datos")
            console.log(e)
        })
    },[])



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
                        <tr>
                            <td>{p.placa}</td>
                            <td>{p.procesador}</td>
                            <td>{p.fuente}</td>
                            <td>{p.gabinete}</td>
                            <td>{p.ram}</td>
                            <td>{p.grafica}</td>
                            <td>{p.almacenamiento}</td>
                            <td>
                                <Link href={{pathname:"Pagina5",query:{key:p.key}}}>
                                        <button ><CiEdit /></button>
                                </Link>
                                        <button ><FaDeleteLeft /></button>
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