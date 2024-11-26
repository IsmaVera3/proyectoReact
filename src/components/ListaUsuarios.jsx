import { Link } from 'react-router-dom';

function ListaUsuarios({ usuarios }) {
  if (!usuarios.length) {
    return <p>Cargando datos...</p>;
  }

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {usuario.name} {usuario.apellido}
          </li>
        ))}
      </ul>

      {/* Botón para volver a la página principal */}
      <div style={{ marginTop: '20px' }}>
        <button>
          <Link to="/">Volver a la página principal</Link>
        </button>
      </div>
    </div>
  );
}

export default ListaUsuarios;
