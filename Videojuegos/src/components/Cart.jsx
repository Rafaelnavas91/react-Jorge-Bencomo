import { useContext } from "react"

import { Container } from "react-bootstrap"
import { CartContext } from "../contexts/CartContext"

export const Cart = () =>{
const{clear, items}=useContext(CartContext);



    return (<Container className='mt-4'>
        <h1>Carro de compras</h1>
        {items?.map(item=> <div key={item.id}>
<h2>{item.title}</h2>
<h3>{item.price}</h3>
<img src={item.pictureUrl}width={300} />
        </div>)}
        <button onClick={clear}>Eliminar productos</button>
        </Container>
    )
}