
import { Link } from "react-router-dom";
import carrito from  "../assets/carrito.png";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const Cartwidget =  () =>{
   
const{items}=useContext(CartContext);


const total =items.reduce((acumulador, valorActual)=> acumulador + valorActual.quantity, 0)


    return( <Link to="/cart">
    <img src={carrito} alt="Carro" width={50} />
    <span>{total}</span>
    </Link>
); 
   
    
};