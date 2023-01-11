import { useNavigate } from "react-router-dom"
import logo from '../../assets/heroes/icono.png'

export const LoginPage = () => {
  
  const navigate = useNavigate();
  const onLogin = () =>{
    navigate('/inicio',{
      replace:true
    })
    
  }


  return (
   
      <>
       
      <div className="container w-75 mt-5 bg-light rounded shadow" >
        <div className="row align-items-stretch">
            <div className="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded">
            
            </div>
            <div className="col bg-white p-5 rounded-end">
            <div className="text-end">
                <img src={logo}/>
              </div>
              <h2 className="fw-bold text-center pt-5 mb-5">Bienvenido</h2>

              <form action="#">
                <div className="mb-4">
                    <label for="email" className="form-label">Correo Electronico</label>
                    <input type="email" className="form-control"/>
                </div>
                <div className="mb-4">
                <label for="password" className="form-label">Contraseña</label>
                    <input type="password" className="form-control"/>
                </div>
                <div className="mb-4 form-check">
                      <input type="checkbox" name="conected" className="form-check-input"/>
                      <label for="conected" className="form-check-label">Mantenerme conectado</label>
                </div> 
                <div className="d-grid">
                    <button type="submit" className="btn btn-warning" onClick={onLogin} id="bot">Iniciar Sesión</button>
                </div>
                <div className="mb-4 mt-3">
                TRACTECK DERECHOS RESERVADOS
                </div>

              </form>

            </div>

        </div>
      </div>
      </>
      

    
    
  )
}
