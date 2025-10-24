import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'
import './Footer.css'

export function Footer () {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='brand'>
          <img src='/nativu.png' alt='NativuMarker logo' className='footer-logo' />
          <h2>NativuMarker</h2>
        </div>

        <div className='footer-links'>
          <a href='#'>Inicio</a>
          <a href='/cafe'>Café</a>
          <a href='#'>Contacto</a>
        </div>

        <div className='footer-socials'>
          <a href='https://facebook.com' target='_blank' rel='noreferrer'><FaFacebook /></a>
          <a href='https://instagram.com' target='_blank' rel='noreferrer'><FaInstagram /></a>
          <a href='https://tiktok.com' target='_blank' rel='noreferrer'><FaTiktok /></a>
        </div>

        <div className='footer-info'>
          <p>🇨🇴 Productos típicos colombianos con sabor y tradición.</p>
          <p>© {new Date().getFullYear()} NativuMarker. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}