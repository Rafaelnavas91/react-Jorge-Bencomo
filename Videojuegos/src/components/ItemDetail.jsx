import { useContext } from "react";

import { ItemCounter } from "./ItemCounter"
 import { CartContext } from "../contexts/CartContext";
 export const ItemDetail=({item}) =>{

const {onAdd} =useContext(CartContext);

const add = ( quantity) =>{
  
onAdd(item, quantity);
}



    return <><h1 style={{fontSize:"30px", } }>{ item.title}</h1><img  src={item.pictureUrl}/>
<h2>precio: {item.price + "$"}</h2>
<h3>stock: {item.stock}</h3>
<ItemCounter onAdd={add} stock={item.stock} initial={1}/>
    
    </>
 }