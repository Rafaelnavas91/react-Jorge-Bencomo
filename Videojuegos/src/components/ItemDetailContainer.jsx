import { useParams } from "react-router-dom";
import{useEffect, useState}from "react";
import Container from 'react-bootstrap/Container';
import "./Navbar.css"
import{game}from "../data/productos"
import{ItemList} from "./itemList"
import{ItemDetail} from "./ItemDetail"


export const ItemDetailContainer  =  (props) =>{
const[item, setItem]=useState(null)

const {id}=useParams();


useEffect(()=>{
const mypromise = new Promise((resolve, reject) => {
  setTimeout(()=>{resolve(game)},2000)
})

mypromise.then((response)=>{
 
  const filterById = response.find((item)=>item.id===Number(id))
  setItems(filterById);

});
},[id]);


    return( 
      <Container className='mt-4'> {item ?<ItemDetail item={item}/> : <>Cargando...</>}
      </Container>
  ); 
   
    
};