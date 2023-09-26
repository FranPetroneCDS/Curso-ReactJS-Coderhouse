import { CartWidget } from '../../common/cartWidget/CartWidget'
import './Navbar.css'

export const Navbar = () => {
  return (
    <nav className="containerNavbar">
      <h1>FP Commerce</h1>
      <ul className="categories">
        <li>Todos</li>
        <li>Remeras</li>
        <li>Camperas</li>
      </ul>
      <CartWidget />
    </nav>
  )
}
