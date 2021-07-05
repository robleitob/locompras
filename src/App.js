import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemList/ItemListContainer';


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
      <ItemListContainer texto = "En este espacio irá el catálogo!!!" />
    </div>
    </>
  );
}

export default App;
