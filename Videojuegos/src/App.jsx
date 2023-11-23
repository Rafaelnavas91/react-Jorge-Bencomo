import { BrowserRouter,Routes,Route } from "react-router-dom";


import {NavBar} from "./components/Navbar";
import {ItemListContainer} from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";



function App(){
  return(
  <BrowserRouter>
  < NavBar/>
  <Routes>
    <Route path="/"
    element ={  < ItemListContainer greeting="Bienvenido"/> }
    />
      <Route path="/category/:id"
    element ={< ItemListContainer greeting="Producto"/>}
    />
          <Route path="/items/:id"
    element ={< ItemDetailContainer />}
    />
  </Routes>

  </BrowserRouter>
 )
}

export default App
