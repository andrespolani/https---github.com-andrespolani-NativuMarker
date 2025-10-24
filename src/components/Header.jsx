import './Header.css'
import { Filters } from './Filters.jsx'
import { CategoryBar } from './CategoryBar.jsx'
import { SearchBar } from './SearchBar.jsx'

export function Header() {
  
  return (
    <header className="header">
      {/* Barra superior con logo y carrito */}
      <div className="top-bar">
        <div className="logo-container">
          <img src="/nativu.png" alt="NativuMarker" className="logo" />
          <h1 className="site-title">NativuMarker</h1>
        </div>

        <div className="cart-icon">🛒</div>
      </div>

      {/* Barra de búsqueda y categorías */}


      {/* Filtros opcionales debajo */}
      <section className="filters-section">
        
        <div className="nav-section">
        
        <CategoryBar />
        <SearchBar />
        <Filters />
      </div>
      </section>
    </header>
  )
}