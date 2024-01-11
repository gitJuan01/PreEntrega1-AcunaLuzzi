import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidgetStyle.css'  /* Importo el style del carrito y el icono */

function CartWidget(props) {    
  return (
    <div className="containerCart">     {/* Asigno las clases correspodientes para dar el style */}
        <ShoppingCartIcon className="cartIcon" />
        <span className='cartNumber'>{props.number}</span>
    </div>
  );
}

export default CartWidget