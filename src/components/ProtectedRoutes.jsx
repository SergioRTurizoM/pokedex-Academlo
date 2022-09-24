import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';


const ProtectedRoutes = () => {

    const name = useSelector(state => state.pokeNameSlice) /// State es el estado del slice, verifgicarlo en Redux del GoogleChrome

		// Aquí va la condición. Puede ser una condición de cualquier tipo. Lo que 
		// Importa es que valide si el usuario está loggeado o no
    if(name !== ""){
        return <Outlet />
    } else { 
        return <Navigate to='/' />
    }                     // Aquí le debemos decir la ruta a la que queremos llevar
};                        // al usuario si no está autenticado

export default ProtectedRoutes;