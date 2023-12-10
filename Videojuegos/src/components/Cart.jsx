import { useContext, useEffect, useState } from "react"

import { Container, Table, Button, Form } from "react-bootstrap"
import { CartContext } from "../contexts/CartContext"
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";


const initialValues = {

    name: "",
    phone: "",
    email: "",


}


export const Cart = () => {
    const { clear, items, onRemove } = useContext(CartContext);
    const [buyer, setBuyer] = useState(initialValues)

    const navigate = useNavigate();
    const total = items.reduce((acumulador, valorActual) => acumulador +valorActual.quantity * valorActual.price, 0)

    const handleChange = () => {
        setBuyer(buyer => {
            return {
                ...buyer,
                [event.target.name]: event.target.value,
            }
        })
    }

    const sendOrder = (ev) => {


        const order = {
            buyer,
            items,

        }
        const db = getFirestore();
        const orderCollection = collection(db, "orders")

        addDoc(orderCollection, order).then(({ id }) => {
            if (id) {
                alert("su orden: " + id + " ha sido cargada");
                setBuyer(initialValues);
                clear();
            }
        })

    }

    if (!items.length) {
        return <Container className='mt-4'><h2>Nada añadido al carro</h2>
            <button onClick={(() => navigate("/"))}>Volver al menu</button>

        </Container>
    }

    return (<Container className='mt-4'>
        <h1>Carro de compras</h1>
        <Table striped="columns">
            <thead>
                <tr>
                    <th>Juego</th>
                    <th>Cantidad</th>
                    <th>Imagen</th>
                    <th>Precio</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>

                {items?.map((item) => (
                    <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.quantity}</td>
                        <td><img src={item.pictureUrl} width={300} /></td>
                        <td>{item.price}</td>
                        <td onClick={() => onRemove(item.id)}>X</td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td>Total:{total}</td>
                </tr>
            </tfoot>
        </Table>



        <button onClick={clear}>Eliminar productos</button>
        <hr />

        <Form>
            <Form.Group className="mb-3" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" value={buyer.email} onChange={handleChange} name="email"  aria-required="true"/>

            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={buyer.name} onChange={handleChange} name="name"  aria-required="true" />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" value={buyer.phone} onChange={handleChange} name="phone"  aria-required="true"/>
            </Form.Group>


            <Button variant="primary" onClick={sendOrder}>
                Enviar
            </Button>
        </Form>

    </Container>
    )
}