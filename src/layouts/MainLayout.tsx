import { Outlet } from 'react-router'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <>
        <NavBar/>
        <div className="my-16">
          <Outlet/>
        </div>
        <Footer/>
    </>
  )
}

export default MainLayout