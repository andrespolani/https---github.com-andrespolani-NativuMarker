import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart.js'
import { CategoryBar } from './CategoryBar.jsx'
import { SearchBar } from './SearchBar.jsx'
import { Filters } from './Filters.jsx'
import { useState, useEffect } from 'react'


export function Products({ products }) {
const { addToCart, removeFromCart, cart } = useCart()
const [modalProduct, setModalProduct] = useState(null)


const checkProductInCart = product => cart.some(item => item.id === product.id)


const handleAddClick = product => setModalProduct(product)


const confirmAddToCart = () => {
addToCart(modalProduct)
setModalProduct(null)
}


const cancelAddToCart = () => setModalProduct(null)


// Cerrar modal con tecla Escape
useEffect(() => {
const handleEsc = e => {
if (e.key === 'Escape') setModalProduct(null)
}
window.addEventListener('keydown', handleEsc)
return () => window.removeEventListener('keydown', handleEsc)
}, [])


// Bloquear scroll cuando el modal está abierto
useEffect(() => {
if (modalProduct) document.body.style.overflow = 'hidden'
else document.body.style.overflow = 'auto'
}, [modalProduct])


return (
<main className='products'>



<ul className='product-grid'>
{products.map(product => {
const isProductInCart = checkProductInCart(product)


return (
<li key={product.id} className='product-card'>
<div className='product-image'>
<img src={product.thumbnail} alt={product.title} />
</div>


<div className='product-info'>
<strong>{product.title}</strong>
<span className='price'>${product.price}</span>
</div>


<button
className={`cart-btn ${isProductInCart ? 'remove' : 'add'}`}
onClick={() =>
isProductInCart
? removeFromCart(product)
: handleAddClick(product)
}
>
{isProductInCart ? (
<><RemoveFromCartIcon /> Quitar del carrito</>
) : (
<><AddToCartIcon /> Agregar al carrito</>
)}
</button>
</li>
)
})}
</ul>


{modalProduct && (
<div className='modal-overlay'>
<div className='modal'>
<h3>¿Seguro que quieres agregar este producto?</h3>
<div className='modal-product'>
<img src={modalProduct.thumbnail} alt={modalProduct.title} />
<p>{modalProduct.title}</p>
<span className='price'>${modalProduct.price}</span>
</div>
<div className='modal-actions'>
<button className='confirm-btn' onClick={confirmAddToCart}>Sí, agregar</button>
<button className='cancel-btn' onClick={cancelAddToCart}>Cancelar</button>
</div>
</div>
</div>
)}
</main>
)
}