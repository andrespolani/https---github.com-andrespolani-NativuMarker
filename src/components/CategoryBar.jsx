import './CategoryBar.css'

export function CategoryBar({ onSelectCategory }) {
  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'cafe', name: 'Café' },
    { id: 'dulces', name: 'Dulces típicos' },
    { id: 'artesanias', name: 'Artesanías' },
    { id: 'bebidas', name: 'Bebidas' },
    { id: 'ropa', name: 'Ropa' }
  ]

  return (
    <div className="category-bar">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className="category-btn"
          onClick={() => onSelectCategory(cat.id)}
        >
          {cat.name}
        </button>
      ))}
    </div>
  )
}