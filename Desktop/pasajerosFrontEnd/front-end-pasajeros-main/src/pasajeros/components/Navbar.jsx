import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate();

    const onLogout = () =>{
        navigate('/login', {
            replace: true
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                
            </Link>
            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link text-info" 
                        to="/inicio"
                    >
                      <img src="../../../src/assets/heroes/icono.png" alt=""  />
                    </NavLink>

                   
                </div>
            </div>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link " 
                        to="/pasajeros"
                    >
                      Planta
                    </NavLink>

                   
                </div>
            </div>
            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link " 
                        to="/minaPage"
                    >
                      Mina
                    </NavLink>

                   
                </div>
            </div>
            {/* <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link text-info" 
                        to="/pasajeros"
                    >
                      ADM
                    </NavLink>

                   
                </div>
            </div> */}

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    
                        <span className='nav-item nav-link text-warning'>
                        Nelson
                        </span>

                        <button className='nav-item nav-link btn'
                        onClick={onLogout}
                        >
                        Cerrar Sesión
                        </button>
                        
                    
                </ul>
            </div>
        </nav>
    )
}