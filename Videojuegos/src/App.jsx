import { BrowserRouter, Routes, Route } from "react-router-dom";


import { NavBar } from "./components/Navbar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { CartProvider } from "./contexts/CartContext";
import { Cart } from "./components/Cart";


function App() {
  return (<CartProvider>
    <BrowserRouter>
      < NavBar />
      <Routes>
        <Route path="/"
          element={< ItemListContainer greeting="Bienvenido" />}
        />
        <Route path="/category/:id"
          element={< ItemListContainer greeting="Producto" />}
        />
        <Route  path="/items/:id"
          element={< ItemDetailContainer />}
        />
            <Route path="/cart"
          element={< Cart />}
        />
      </Routes>

    </BrowserRouter>
  </CartProvider>
  )
}

export default App
