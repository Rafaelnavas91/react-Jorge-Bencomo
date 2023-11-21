
import "./Navbar.css"
import{Cartwidget} from "./Cartwidget";

export const Navbar = () =>{
    return(<header><nav>
        <div className="RIT">RIT</div>    

    <ul > 
        <li><a href="category/superheroes">Spiderman</a></li>
        <li><a href="category/deportes">FIFA</a></li>
        <li><a href="category/ficcion">GOD OF WAR</a></li>
        <li><a href="category/deportes">NBA</a></li>
        <div className="carro"><Cartwidget/></div>
    </ul>
      
    </nav>

    </header>)
}