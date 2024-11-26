import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Formulario from './components/Formulario';
import ListaUsuarios from './components/ListaUsuarios';

function App() {
  const [usuarios, setUsuarios] = useState([]);

  // Obtener usuarios
  const fetchUsuarios = async () => {
    try {
      const response = await axios.get('http://localhost:3000/usuarios');
      setUsuarios(response.data);
    } catch (error) {
      console.error('Error al obtener usuarios', error);
    }
  };

  // Agregar usuario
  const agregarUsuario = async (nuevoUsuario) => {
    try {
      await axios.post('http://localhost:3000/usuarios', nuevoUsuario);
      fetchUsuarios(); // Actualizar lista
    } catch (error) {
      console.error('Error al agregar usuario', error);
    }
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  return (
    <Router>
      <div>
        {/* Botón de navegación */}
        <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
          <button>
            <Link to="/usuarios">Ver Usuarios</Link>
          </button>
        </div>

        <h1>Gestión de Usuarios</h1>

        {/* Rutas */}
        <Routes>
          <Route path="/" element={<Formulario onAgregarUsuario={agregarUsuario} />} />
          <Route path="/usuarios" element={<ListaUsuarios usuarios={usuarios} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
