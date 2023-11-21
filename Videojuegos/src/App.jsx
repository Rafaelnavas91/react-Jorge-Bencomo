import { BrowserRouter,Routes,Route } from "react-router-dom";


import {Navbar} from "./components/Navbar";
import {ItemListContainer} from "./components/ItemListContainer";


function App(){
  return(
  <BrowserRouter>
  < Navbar/>
  <Routes>
    <Route path="/"
    element ={< ItemListContainer greeting="Bienvenido"/>}
    />
      <Route path="/category/:id"
    element ={< ItemListContainer greeting="Producto"/>}
    />
          <Route path="/items/:id"
    element ={< ItemListContainer />}
    />
  </Routes>

  </BrowserRouter>
 )
}

export default App
