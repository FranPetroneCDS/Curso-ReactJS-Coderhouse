import { Navbar } from './navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'

const Layout = () => {
  return (
    <div>
      <div style={{ height: '10vh' }}>
        <Navbar />
      </div>
      <div style={{ marginTop: 20, marginBottom: 20, minHeight: '70vh' }}>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
