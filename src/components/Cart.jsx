import './Cart.css'
import { useId } from 'react'
import { FaShoppingCart, FaTrashAlt, FaPlus, FaMinus } from 'react-icons/fa'
import { useCart } from '../hooks/useCart.js'

function CartItem({ thumbnail, price, title, quantity, addToCart, decreaseFromCart }) {
  return (
    <li className="cart-item">
      <img src={thumbnail} alt={title} />
      <div className="cart-details">
        <strong>{title}</strong>
        <p className="cart-price">${price.toLocaleString('es-CO')}</p>
      </div>

      <footer className="cart-controls">
        <button className="qty-btn" onClick={decreaseFromCart}><FaMinus /></button>
        <span>{quantity}</span>
        <button className="qty-btn" onClick={addToCart}><FaPlus /></button>
      </footer>
    </li>
  )
}

export function Cart() {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart, decreaseFromCart } = useCart()

  const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0)

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <FaShoppingCart />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <header className="cart-header">
          <h2>🛍️ Tu carrito</h2>
          <button onClick={clearCart} className="clear-btn">
            <FaTrashAlt /> Vaciar
          </button>
        </header>

        {cart.length === 0 ? (
          <p className="empty-cart">Tu carrito está vacío 🧺</p>
        ) : (
          <ul>
            {cart.map(product => (
              <CartItem
                key={product.id}
                {...product}
                addToCart={() => addToCart(product)}
                decreaseFromCart={() => decreaseFromCart(product)}
              />
            ))}
          </ul>
        )}

        {cart.length > 0 && (
          <footer className="cart-footer">
            <h3>Total: ${total.toLocaleString('es-CO')}</h3>
            <button className="checkout-btn">Finalizar compra</button>
          </footer>
        )}
      </aside>
    </>
  )
}