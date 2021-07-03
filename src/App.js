import './App.css';
import Navbar from './components/Navbar/Navbar';


function App() {
  const darBienvenida = ()=> alert('Bienvenidos a la tienda');
  return (
    <>
    <div className="App">
      <Navbar 
        nombreDeLaTienda="LoCompras" 
        subtitulo="...lo mejor de la WEB" 
        darBienvenida={darBienvenida}
      />
      
    </div>
    </>
  );
}

export default App;
