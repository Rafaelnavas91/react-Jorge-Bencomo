
import "./Navbar.css"
import{Cartwidget} from "./Cartwidget";

export const Navbar = () =>{
    return(<header><nav>
        <div className="RIT">RIT</div>    

    <ul>
        <li><a href="">Juegos</a></li>
        <li><a href="">Consolas</a></li>
        <li><a href="">Servicios</a></li>
        <li><a href="">Contacto</a></li>
        <div className="carro"><Cartwidget/></div>
    </ul>
      
    </nav>

    </header>)
}