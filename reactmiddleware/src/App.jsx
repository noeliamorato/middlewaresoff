
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { ModalContextProvider } from './context/modalContext'
import Modal from './modal'
import Propietariomascotas from './pages/Propietariomascotas'
import { Navcontextprovider } from './context/navcontext'
import { Usercontextprovider } from './context/userContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {

  return (
    <>
      <BrowserRouter>
        <ModalContextProvider>
          <Usercontextprovider>
            <Navcontextprovider>
              {/* Rutas van aquí */}
              <Routes>
                {/* Ruta de Propietariomascotas */}
                <Route path='/Propietariomascotas' element={<Propietariomascotas />} />
              </Routes>

              {/* Componentes compartidos */}
              <ToastContainer />
              <Modal />
            </Navcontextprovider>
          </Usercontextprovider>
        </ModalContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
