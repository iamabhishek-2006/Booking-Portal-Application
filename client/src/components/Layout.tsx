import Navbar from './Navbar'
import Sidebar from './Sidebar';



const Layout = ({children}: any) => {
  return (
    <div>
        <Navbar/>
        <div  className='flex-1'> <Sidebar/> {children}</div>
    </div>
  )
}

export default Layout;