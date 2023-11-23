import { useParams } from "react-router-dom";
import{useEffect, useState}from "react";
import Container from 'react-bootstrap/Container';

import{game}from "../data/productos"

import{ItemDetail} from "./ItemDetail"


export const ItemDetailContainer  =  () =>{
const[item, setItem]=useState(null)

const {id}=useParams();


useEffect(()=>{
const mypromise = new Promise((resolve, reject) => {
  setTimeout(()=>{resolve(game)},2000)
})

mypromise.then((response)=>{
 
  const findById = response.find((item)=>item.id===Number(id))
  setItem(findById);

});
},[id]);


    return( 
      <Container className='mt-4'> {item ?<ItemDetail item={item}/> : <>Cargando...</>}
      </Container>
  ); 
   
    
};