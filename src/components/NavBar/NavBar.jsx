import "./NavBarStyle.css"  /* Importo el style del navbar y el componente cartwidget */
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
  return (
    <div className="NavBarStyle"> {/* Asigno clase style */}
      <nav>
        <ul>  {/* Lista de paginas clickeables */}
          <li>Home</li>
          <li>Nosotros</li>
          <li>Contacto</li>
          <li>Preguntas frecuentes</li>
          <li><CartWidget number={2}/></li> {/* Numero del carrito hardcodeado */}
        </ul>
      </nav>
    </div>
  )
}

export default NavBar