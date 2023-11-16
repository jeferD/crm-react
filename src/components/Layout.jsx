import { Outlet, Link, useLocation } from "react-router-dom"


function Layout() {
    const location = useLocation()
    console.log('location: ', location);//saber donde estamos
  return (
    <div className="md:flex md:min-h-screen">
        <aside className="md:w-1/4 bg-blue-700 px-5 py-10">
            <h2 className="text-xl font-black text-center text-white">CRM - CLIENTES</h2>

            <nav className="mt-10">
                {/* Link no genera parpadeo */}
                <Link className={`${location.pathname === '/' ? 'text-white font-bold bg-white bg-opacity-30 rounded-lg pl-5' : 'text-white'} text-1xl block mt-2 hover:text-blue-300 `} to="/">Clientes</Link> 
                <Link className={`${location.pathname === '/clientes/nuevo' ? 'text-white font-bold bg-white bg-opacity-30 rounded-lg pl-5' : 'text-white'} text-1xl block mt-2 hover:text-blue-300 `} to="/clientes/nuevo">Nuevo Cliente</Link>
            </nav>
        </aside>
        <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
            <Outlet/>
        </main>
       
    </div>
  )
}

export default Layout