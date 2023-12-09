
import { Link } from "react-router-dom";
import carrito from  "../assets/carrito.png";



export const Cartwidget =  () =>{
   
    return( <Link to="/cart">
    <img src={carrito} alt="Carro" width={50} />
    <span>8</span>
    </Link>
); 
   
    
};